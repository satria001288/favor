const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server berjalan 🔥");
});

module.exports = app;
