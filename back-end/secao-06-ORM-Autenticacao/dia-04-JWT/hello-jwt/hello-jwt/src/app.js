const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const loginRouter = require('./routes/login');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(middlewares.error);

app.get('/ping', controllers.ping);

app.use('/login', loginRouter);

app.get('/users/me', async (req, res) => {
  const bearer = req.header('Authorization');
  const bearerToken = bearer.split(' ')[1];
  const payload = jwt.verify(bearerToken, 'senha-insana');
  return res.status(200).json(payload);
});

module.exports = app;
