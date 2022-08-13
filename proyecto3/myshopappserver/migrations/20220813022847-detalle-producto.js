'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('detalleordens', {
      fields: ['productoId'],
      type: 'foreign key',
      name: 'detalle-producto',
      references: {
        table: 'productos',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('detalleordens', {
      fields: ['productoId'],
      type: 'foreign key',
      name: 'detalle-producto',
      references: {
        table: 'productos',
        field: 'id'
      }
    })
  }
};
