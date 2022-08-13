'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('ordens', {
      fields: ['usuarioID'],
      type: 'foreign key',
      name: 'usuario-orden-relacion',
      references: {
        table: 'usuarios',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('ordens', {
      fields: ['usuarioID'],
      type: 'usuario-orden-relacion',
      name: 'usuario_orden',
      references: {
        table: 'usuarios',
        field: 'id'
      }
    })
  }
};
