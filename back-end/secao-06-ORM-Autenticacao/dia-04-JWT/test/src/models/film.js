const Films = (sequelize, DataTypes) => {
  const film = sequelize.define('Film', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anoLancamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    diretorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: false,
    tableName: 'films',
  });

  film.associate = (models) => {
    film.belongsTo(models.Director, {
      foreignKey: 'diretorId'
    })
  }

  return film
};

module.exports = Films;