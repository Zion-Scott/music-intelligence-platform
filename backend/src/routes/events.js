const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const event = req.body;

  console.log("Received event:", event);

  res.status(201).json({
    message: "Event logged successfully",
    event
  });
});

module.exports = router;