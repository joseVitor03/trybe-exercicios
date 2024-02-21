const express = require('express');
const validateName = require('./middleware/validateName');
const validatePrice = require('./middleware/validatePrice');
const validateDescription = require('./middleware/validateDescription');
const validateCreatedAt = require('./middleware/validateCreatedAt');
const validateRating = require('./middleware/validateRating');
const validateDifficulty = require('./middleware/validateDifficulty');
const generateToken = require('../utils/token');
const auth = require('./middleware/auth');

const app = express();
app.use(express.json());

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) {
    res.status(401).json({ "message": "Campos ausentes!" });
  }
  const token = generateToken();

  return res.status(200).json({ token });
});

app.post('/activities',
  auth,
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
 (_req, res) => {
  res.status(201).json({  message: 'Atividade cadastrada com sucesso!' });
});


module.exports = app;
