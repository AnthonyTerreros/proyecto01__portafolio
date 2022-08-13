'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('productos', {
      fields: ['categoriaId'],
      type: 'foreign key',
      name: 'producto-categoria-relacion',
      references: {
        table: 'categorias',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('productos', {
      fields: ['categoriaId'],
      type: 'foreign key',
      name: 'producto-categoria-relacion',
      references: {
        table: 'categorias',
        field: 'id'
      }
    })
  }
};
