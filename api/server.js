const express = require("express");
const app = express();

// Middleware biar JSON bisa dibaca
app.use(express.json());

// Route utama
app.get("/", (req, res) => {
  res.send("Server berjalan 🔥 (via Vercel API)");
});

// Jangan app.listen — Vercel yang handle
module.exports = app;
