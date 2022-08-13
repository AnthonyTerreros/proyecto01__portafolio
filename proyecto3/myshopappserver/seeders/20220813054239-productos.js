'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let names = ["Lentes Luis Vuitton", "Camisa Americana para Hombre", "Lentes Luis Vuitton", "Procesador Ryzen 5600G 6 Nucleos 12 Hilos", "Juguete LEGO de cueva de Minecraft."]
    let url_imagen = ["../../assets/images/foto1.webp", "../../assets/images/foto2.webp", "../../assets/images/foto3.webp", "../../assets/images/juguete.jpg", "../../assets/images/procesador.jpg"]

    for (let i = 0; i < names.length; i++) {  
      await queryInterface.bulkInsert('producto', [{  
          nombre: names[i],  
          stock: Math.floor(Math.random() * 30) + 1,  
          url_imagen: url_imagen[i],
          precio: Math.floor(Math.random() * 1000) + 100,
          categoriaId: Math.floor(Math.random() * 6) + 1,
          createdAt: new Date(),  
          updatedAt: new Date()  
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('producto', null, {});  
  }
};