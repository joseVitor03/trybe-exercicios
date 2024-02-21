const express = require('express');
const { Film, Director } = require('./models')
const app = express();


app.get('/films', async (_req, res) => {
  const response = await Film.findAll({ exclude: 'diretorId', include: { model: Director }});
  console.log(Director);
  res.status(200).json(response)
})
module.exports = app