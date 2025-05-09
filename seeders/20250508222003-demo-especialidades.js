'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Especialidads', [
      { descripcionEsp: 'Pediatría', createdAt: new Date(), updatedAt: new Date() },
      { descripcionEsp: 'Dermatología', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Especialidads', null, {});
  }
};
