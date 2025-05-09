'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Medicamento extends Model {
    static associate(models) {
      // Aquí defines la relación con Especialidad
      Medicamento.belongsTo(models.Especialidad, {
        foreignKey: 'CodEspec', // Clave foránea en Medicamento
        as: 'especialidad' // Alias para acceder a la especialidad
      });
    }
  }

  Medicamento.init({
    descripcionMed: DataTypes.STRING,
    fechaFabricacion: DataTypes.DATE,
    fechaVencimiento: DataTypes.DATE,
    Presentacion: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precioVentaUni: DataTypes.DECIMAL,
    precioVentaPres: DataTypes.DECIMAL,
    Marca: DataTypes.STRING,
    CodEspec: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Medicamento',
  });

  return Medicamento;
};
