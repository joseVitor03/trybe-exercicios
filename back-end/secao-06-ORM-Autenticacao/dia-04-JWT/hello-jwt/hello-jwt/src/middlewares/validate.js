const jwi = require('jsonwebtoken');

const validateBody = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).json({ message: 'username e password required' });
  }

  if (username.length < 5 || password.length < 5) {
    return res.status(401).json(
      { message: 'username e password precisam ter um tamanho de pelo menos 5 caracteres.' },
);
  }

  next();
};

const isAdmin = (req, res, next) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 's3nh4S3gur4???') {
    const token = jwi.sign({
      user: username,
      admin: true,
    }, 'senha-insana', { expiresIn: '1h' });

    return res.status(200).json(token);
  }

  next();
};

module.exports = {
  validateBody,
  isAdmin,
};