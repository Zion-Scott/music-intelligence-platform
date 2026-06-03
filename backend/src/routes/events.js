const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/", async (req, res) => {
  const { user_id, track_id, event_type } = req.body;

  if (!user_id || !track_id || !event_type) {
    return res.status(400).json({
      error: "user_id, track_id, and event_type are required"
    });
  }

  try {
    const result = await pool.query(
      `
      INSERT INTO interaction_events (user_id, track_id, event_type)
      VALUES ($1, $2, $3)
      RETURNING *;
      `,
      [user_id, track_id, event_type]
    );

    res.status(201).json({
      message: "Event logged successfully",
      event: result.rows[0]
    });
  } catch (error) {
    console.error("Error logging event:", error);
    res.status(500).json({ error: "Failed to log event" });
  }
});

module.exports = router;