'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    static associate(models) {
      producto.belongsTo(models.categoria, {
        foreignKey: {
          name: 'categoriaId'
        }
      })
      models.categoria.hasOne(producto, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
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
    freezeTableName: true
  });
  return producto;
};