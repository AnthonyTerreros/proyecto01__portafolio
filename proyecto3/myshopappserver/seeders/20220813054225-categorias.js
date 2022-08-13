'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let categorias = ["Moda", "Dispositivos y Electronicos", "Gaming", "Juguetes", "Libros", "Alimentos"]
    let descriptions = [
      "Ropa y Maquillaje.",
      "Toda la tecnologia a tu alcanze.",
      "Todos los perifericos gaming para ti.",
      "Todos los juguetes que puedas imaginar.",
      "Cualquier libro lo encontraras aqui.",
      "La comida que te guste, la podras compra aqui."
    ]
    for (let i = 0; i < categorias.length; i++) {  
      await queryInterface.bulkInsert('categoria', [{  
          name: categorias[i],  
          descripcion: descriptions[i],
          createdAt: new Date(),  
          updatedAt: new Date()  
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoria', null, {});  
  }
};