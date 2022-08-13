'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orden.belongsTo(models.usuario, {
        foreignKey: {
          name: 'usuarioID'
        }
      })
      models.usuario.hasOne(models.orden, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  orden.init({
    valorfinal: DataTypes.INTEGER,
    fecha_de_pedido: DataTypes.DATE,
    usuarioID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orden',
  });
  return orden;
};