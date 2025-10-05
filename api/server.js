const express = require("express");
const app = express();

// Middleware (opsional)
app.use(express.json());

// Route utama
app.get("/", (req, res) => {
  res.send("✅ Server berjalan di Vercel!");
});

// Export handler (tanpa app.listen)
module.exports = app;
