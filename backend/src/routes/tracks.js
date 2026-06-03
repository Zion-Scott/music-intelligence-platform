const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        tracks.track_id,
        tracks.title,
        tracks.genre,
        tracks.duration_seconds,
        tracks.release_year,
        artists.name AS artist_name
      FROM tracks
      JOIN artists ON tracks.artist_id = artists.artist_id
      ORDER BY tracks.track_id;
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching tracks:", error);
    res.status(500).json({ error: "Failed to fetch tracks" });
  }
});

module.exports = router;