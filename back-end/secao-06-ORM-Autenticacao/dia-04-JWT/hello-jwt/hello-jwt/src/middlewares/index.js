const error = require('./error');
const { validateBody, isAdmin } = require('./validate');

module.exports = {
  error,
  validateBody,
  isAdmin,
};
