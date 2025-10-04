import express from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const lolhuman = "9b96ef5d9003f9ad78804d8c"; // API key kamu

app.use(express.static(__dirname));

// TikTok Downloader
app.get("/api/tiktok", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.json({ error: "URL tidak ditemukan" });
  const api = `https://api.lolhuman.xyz/api/tiktok?apikey=${lolhuman}&url=${encodeURIComponent(url)}`;
  const result = await fetch(api);
  const data = await result.json();
  res.json(data);
});

// Tambah downloader lain
app.get("/api/youtube", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.json({ error: "URL tidak ditemukan" });
  const api = `https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolhuman}&url=${encodeURIComponent(url)}`;
  const result = await fetch(api);
  const data = await result.json();
  res.json(data);
});

app.get("/api/instagram", async (req, res) => {
  const { url } = req.query;
  const api = `https://api.lolhuman.xyz/api/instagram?apikey=${lolhuman}&url=${encodeURIComponent(url)}`;
  const result = await fetch(api);
  const data = await result.json();
  res.json(data);
});

app.get("/api/facebook", async (req, res) => {
  const { url } = req.query;
  const api = `https://api.lolhuman.xyz/api/facebook?apikey=${lolhuman}&url=${encodeURIComponent(url)}`;
  const result = await fetch(api);
  const data = await result.json();
  res.json(data);
});

app.get("/api/twitter", async (req, res) => {
  const { url } = req.query;
  const api = `https://api.lolhuman.xyz/api/twitter?apikey=${lolhuman}&url=${encodeURIComponent(url)}`;
  const result = await fetch(api);
  const data = await result.json();
  res.json(data);
});

app.listen(3000, () => console.log("Server aktif di port 3000"));
