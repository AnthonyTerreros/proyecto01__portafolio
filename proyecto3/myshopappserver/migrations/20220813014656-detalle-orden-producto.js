'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('detalleordens', {
      fields: ['ordenId'],
      type: 'foreign key',
      name: 'detalle-orden-producto',
      references: {
        table: 'ordens',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('detalleordens', {
      fields: ['ordenId'],
      type: 'foreign key',
      name: 'detalleorden_orden',
      references: {
        table: 'ordens',
        field: 'id'
      }
    })
  }
};
