class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}
function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500;
  res.status(status).json({ error: err.message, status });
}
module.exports = { AppError, errorHandler };
