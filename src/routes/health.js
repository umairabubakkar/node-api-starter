const express = require('express');
const router = express.Router();
const startTime = Date.now();
router.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: Math.floor((Date.now() - startTime) / 1000) + 's' });
});
router.get('/ready', (req, res) => res.json({ ready: true }));
module.exports = router;
