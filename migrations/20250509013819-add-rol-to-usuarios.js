'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Usuarios', 'rol', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'usuario', // Valor por defecto para nuevos usuarios
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Usuarios', 'rol');
  }
};
