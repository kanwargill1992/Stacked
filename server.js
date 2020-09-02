const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app
  .get("/", (req, res) => res.send("Running"))

  .listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
