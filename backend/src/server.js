const express = require("express");
const cors = require("cors");
require("dotenv").config();

const trackRoutes = require("./routes/tracks");
const eventRoutes = require("./routes/events");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Music Intelligence Platform API is running" });
});

app.use("/api/tracks", trackRoutes);
app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});