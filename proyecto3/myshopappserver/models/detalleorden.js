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
      detalleorden.belongsTo(models.orden, {
        foreignKey: {
          name: 'ordenId'
        }
      })
      models.orden.hasMany(detalleorden, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      detalleorden.belongsTo(models.producto, {
        foreignKey: {
          name: 'productoId'
        }
      })
      models.producto.hasMany(detalleorden, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
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