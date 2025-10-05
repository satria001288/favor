// api/server.js  (Vercel serverless function)
const nodemailer = null; // no email here; we just accept and respond
module.exports = (req, res) => {
  if (req.method === 'POST' && req.url === '/api/contact' || req.method === 'POST') {
    try {
      let body = req.body;
      // if body empty, collect from stream (Vercel passes parsed body)
      if (!body || Object.keys(body).length === 0) body = req.body || {};
      // For demo, we simply echo and return ok.
      console.log('Contact received:', body);
      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ ok:false });
    }
  }
  // default: static API health
  res.setHeader('Content-Type','application/json');
  res.status(200).send(JSON.stringify({ ok:true, msg:'API ready' }));
};