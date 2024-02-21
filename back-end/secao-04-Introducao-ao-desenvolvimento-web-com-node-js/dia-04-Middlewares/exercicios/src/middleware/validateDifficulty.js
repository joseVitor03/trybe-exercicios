const validateDifficulty = async (req, res, next) => {
  const { description } = req.body;
  const { difficulty } = description;
  const classifications = ['Fácil', 'Médio', 'Difícil'];
  if (!classifications.includes(difficulty)) {
    res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  }

  next();
};

module.exports = validateDifficulty;