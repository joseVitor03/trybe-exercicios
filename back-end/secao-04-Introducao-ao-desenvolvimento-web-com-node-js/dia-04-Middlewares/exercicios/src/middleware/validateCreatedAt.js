const validateCreatedAt = async (req, res, next) => {
  const { description } = req.body;
  const { createdAt } = description;
  if (!createdAt.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i)) {
    res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
  }

  next();
};

module.exports = validateCreatedAt;