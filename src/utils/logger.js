const levels = { error: 0, warn: 1, info: 2, debug: 3 };
const currentLevel = levels[process.env.LOG_LEVEL || 'info'];
function log(level, msg, data) {
  if (levels[level] <= currentLevel) {
    console.log(JSON.stringify({ level, msg, data, timestamp: new Date().toISOString() }));
  }
}
module.exports = {
  error: (msg, data) => log('error', msg, data),
  warn: (msg, data) => log('warn', msg, data),
  info: (msg, data) => log('info', msg, data),
  debug: (msg, data) => log('debug', msg, data)
};
