'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('orden', {
      fields: ['usuarioID'],
      type: 'foreign key',
      name: 'usuario-orden-relacion',
      references: {
        table: 'usuario',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('orden', {
      fields: ['usuarioID'],
      type: 'usuario-orden-relacion',
      name: 'usuario_orden',
      references: {
        table: 'usuario',
        field: 'id'
      }
    })
  }
};
