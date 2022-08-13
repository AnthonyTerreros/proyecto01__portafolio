'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      producto.belongsTo(models.categoria)
      models.categoria.hasOne(producto)
    }
  }
  producto.init({
    nombre: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    url_imagen: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'producto',
  });
  return producto;
};