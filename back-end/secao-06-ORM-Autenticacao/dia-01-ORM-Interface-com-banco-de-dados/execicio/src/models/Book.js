const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING
    },
    pageQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  })

  return Book;
}

module.exports = Book;