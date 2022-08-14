'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalleorden', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ordenId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'orden',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      productoId: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.FLOAT
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detalleorden');
  }
};