// server.js
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// === CONFIG ===
const API_KEY = "9b96ef5d9003f9ad78804d8c";
const USERNAME = "satria2882011";
const PASSWORD = "1234567890";

// === MIDDLEWARE ===
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// === LOGIN ===
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USERNAME && password === PASSWORD) {
    res.json({ success: true, message: "Login success" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// === TIKTOK DOWNLOADER ===
app.get("/api/tiktok", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.json({ error: "Missing URL" });
  try {
    const result = await axios.get(
      `https://api.lolhuman.xyz/api/tiktok?apikey=${API_KEY}&url=${url}`
    );
    res.json(result.data);
  } catch (err) {
    res.json({ error: "Failed to fetch TikTok data" });
  }
});

// === YOUTUBE DOWNLOADER ===
app.get("/api/youtube", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.json({ error: "Missing URL" });
  try {
    const result = await axios.get(
      `https://api.lolhuman.xyz/api/ytvideo?apikey=${API_KEY}&url=${url}`
    );
    res.json(result.data);
  } catch (err) {
    res.json({ error: "Failed to fetch YouTube data" });
  }
});

// === INSTAGRAM DOWNLOADER ===
app.get("/api/instagram", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.json({ error: "Missing URL" });
  try {
    const result = await axios.get(
      `https://api.lolhuman.xyz/api/instagram?apikey=${API_KEY}&url=${url}`
    );
    res.json(result.data);
  } catch (err) {
    res.json({ error: "Failed to fetch Instagram data" });
  }
});

// === FACEBOOK DOWNLOADER ===
app.get("/api/facebook", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.json({ error: "Missing URL" });
  try {
    const result = await axios.get(
      `https://api.lolhuman.xyz/api/fbdl?apikey=${API_KEY}&url=${url}`
    );
    res.json(result.data);
  } catch (err) {
    res.json({ error: "Failed to fetch Facebook data" });
  }
});

// === QR CODE GENERATOR ===
app.get("/api/qrcode", (req, res) => {
  const { text } = req.query;
  if (!text) return res.json({ error: "Missing text" });
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    text
  )}`;
  res.json({ success: true, qr: qrUrl });
});

// === DEFAULT ===
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// === START SERVER ===
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});