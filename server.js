const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

//Connect DataBase
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app
  .get("/", (req, res) => res.send("Running"))

  //Routes
  .use("/api/users", require("./routes/api/users"))
  .use("/api/profile", require("./routes/api/profile"))
  .use("/api/posts", require("./routes/api/posts"))
  .use("/api/auth", require("./routes/api/auth"))

  .listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
