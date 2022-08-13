'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('detalleorden', {
      fields: ['ordenId'],
      type: 'foreign key',
      name: 'detalle-orden-producto',
      references: {
        table: 'orden',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('detalleorden', {
      fields: ['ordenId'],
      type: 'foreign key',
      name: 'detalleorden_orden',
      references: {
        table: 'orden',
        field: 'id'
      }
    })
  }
};
