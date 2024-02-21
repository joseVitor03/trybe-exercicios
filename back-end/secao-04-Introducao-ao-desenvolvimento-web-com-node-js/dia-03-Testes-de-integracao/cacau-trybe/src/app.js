const express = require("express");
const cacauTrybe = require('./cacauTrybe');
const app = express();

app.use(express.json());

app.get('/chocolates', async (req, res) => {
  try {
    const data = await cacauTrybe.allChocolates();
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
});

app.get('/chocolates/total', async (req, res) => {
  try {
    const data = await cacauTrybe.totalChocolates();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
});

app.get('/chocolates/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const candy = await cacauTrybe.chocolateSpecific(id);
    console.log(candy);
    res.status(200).json(candy)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  try {
    const { brandId } = req.params;
    const response = await cacauTrybe.chocolatesByBrand(brandId);
    res.status(200).json(response); 
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

module.exports = app;