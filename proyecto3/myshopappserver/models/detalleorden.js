'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalleorden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      detalleorden.belongsTo(models.orden)
      models.orden.hasMany(detalleorden)
      detalleorden.belongsTo(models.producto)
      models.producto.hasMany(detalleorden)
    }
  }
  detalleorden.init({
    ordenId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER,
    precio: DataTypes.FLOAT,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detalleorden',
  });
  return detalleorden;
};