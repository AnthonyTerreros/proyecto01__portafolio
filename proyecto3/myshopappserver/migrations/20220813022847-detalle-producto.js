'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('detalleorden', {
      fields: ['productoId'],
      type: 'foreign key',
      name: 'detalle-producto',
      references: {
        table: 'producto',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('detalleorden', {
      fields: ['productoId'],
      type: 'foreign key',
      name: 'detalle-producto',
      references: {
        table: 'producto',
        field: 'id'
      }
    })
  }
};
