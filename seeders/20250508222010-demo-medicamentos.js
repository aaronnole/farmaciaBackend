'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Medicamentos', [
      {
        descripcionMed: 'Paracetamol 500mg',
        fechaFabricacion: new Date('2024-01-10'),
        fechaVencimiento: new Date('2026-01-10'),
        Presentacion: 'Tabletas',
        stock: 200,
        precioVentaUni: 0.5,
        precioVentaPres: 5.0,
        Marca: 'Genfar',
        CodEspec: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcionMed: 'Crema Antifúngica',
        fechaFabricacion: new Date('2023-07-15'),
        fechaVencimiento: new Date('2025-07-15'),
        Presentacion: 'Crema',
        stock: 80,
        precioVentaUni: 3.0,
        precioVentaPres: 28.0,
        Marca: 'Dermacare',
        CodEspec: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Medicamentos', null, {});
  }
};
