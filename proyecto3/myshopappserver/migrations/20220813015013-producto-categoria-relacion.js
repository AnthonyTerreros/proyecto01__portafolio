'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('producto', {
      fields: ['categoriaId'],
      type: 'foreign key',
      name: 'producto-categoria-relacion',
      references: {
        table: 'categoria',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('producto', {
      fields: ['categoriaId'],
      type: 'foreign key',
      name: 'producto-categoria-relacion',
      references: {
        table: 'categoria',
        field: 'id'
      }
    })
  }
};
