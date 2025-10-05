const express = require("express");
const app = express();
const PORT = 3000;

// Route utama
app.get("/", (req, res) => {
  res.send("Server berjalan 🔥");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server aktif di http://localhost:${PORT}`);
});
