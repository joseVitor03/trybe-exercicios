const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { validateBody, isAdmin } = require('../middlewares');

const loginRouter = Router();

loginRouter.post('/', isAdmin, validateBody, async (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({
    name: username,
    admin: false,
  }, 'senha-insana', { expiresIn: '1h' });

  res.status(201).json(token);
});

module.exports = loginRouter;