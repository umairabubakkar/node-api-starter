module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  cors: { origin: process.env.CORS_ORIGIN || '*' },
  rateLimit: { max: parseInt(process.env.RATE_LIMIT_MAX) || 100, window: 60000 }
};
