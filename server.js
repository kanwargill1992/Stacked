const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app
  .get("/", (req, res) => res.send("Running"))

  .listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
