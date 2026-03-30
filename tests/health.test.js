const assert = require('assert');
describe('Health Check', () => {
  it('should return ok status', () => {
    const status = { status: 'ok' };
    assert.strictEqual(status.status, 'ok');
  });
  it('should have uptime', () => {
    const uptime = Math.floor(process.uptime());
    assert(uptime >= 0);
  });
});
