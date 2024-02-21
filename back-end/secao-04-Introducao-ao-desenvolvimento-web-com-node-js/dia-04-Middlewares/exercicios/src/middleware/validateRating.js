const { raw } = require("express");

const validateRating = async (req, res, next) => {
  const { description } = req.body;
  const { rating } = description;
  if ( !Number.isInteger(rating) || rating <= 0 || rating > 5) {
    res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  }

  next();
};

module.exports = validateRating;