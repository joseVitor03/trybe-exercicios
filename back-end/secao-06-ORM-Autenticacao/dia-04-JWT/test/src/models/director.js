const Director = (sequelize, DataTypes) => {
  const director = sequelize.define('Director', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false,
    tableName: 'directors',
    underscored: true
  });

  director.associate = (models) => {
    director.hasMany(models.Film, {
      foreignKey: 'diretorId'
    })
  }

  return director;
}

module.exports = Director