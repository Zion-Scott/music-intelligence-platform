const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Sample Track",
      artist: "Sample Artist",
      genre: "R&B"
    }
  ]);
});

module.exports = router;