function validateBody(schema) {
  return (req, res, next) => {
    const errors = [];
    for (const [field, rules] of Object.entries(schema)) {
      if (rules.required && !req.body[field]) {
        errors.push(field + ' is required');
      }
      if (rules.type && req.body[field] && typeof req.body[field] !== rules.type) {
        errors.push(field + ' must be ' + rules.type);
      }
    }
    if (errors.length) return res.status(400).json({ errors });
    next();
  };
}
module.exports = { validateBody };
