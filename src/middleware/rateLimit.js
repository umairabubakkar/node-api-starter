const requests = new Map();

function rateLimit(maxRequests = 100, windowMs = 60000) {
  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    const windowStart = now - windowMs;
    const requestTimestamps = (requests.get(ip) || []).filter(t => t > windowStart);
    if (requestTimestamps.length >= maxRequests) {
      return res.status(429).json({ error: 'Too many requests' });
    }
    requestTimestamps.push(now);
    requests.set(ip, requestTimestamps);
    next();
  };
}
module.exports = { rateLimit };
