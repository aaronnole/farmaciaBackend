'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Especialidad extends Model {
    static associate(models) {
      // Aquí defines la relación con Medicamento
      Especialidad.hasMany(models.Medicamento, {
        foreignKey: 'CodEspec', // Clave foránea en Medicamento
        as: 'medicamentos' // Alias para acceder a los medicamentos
      });
    }
  }

  Especialidad.init({
    CodEspec: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    descripcionEsp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Especialidad',
  });

  return Especialidad;
};
