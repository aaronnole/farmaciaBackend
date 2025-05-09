'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // Aquí puedes definir asociaciones si es necesario, como asociaciones con otros modelos
    }
  }

  Usuario.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    rol: {
      type: DataTypes.STRING,  // Puedes definir el tipo según tus necesidades (por ejemplo, STRING o ENUM)
      allowNull: false,
      defaultValue: 'usuario' // Valor por defecto, si el rol no se especifica
    },
  }, {
    sequelize,
    modelName: 'Usuario',
  });

  return Usuario;
};
