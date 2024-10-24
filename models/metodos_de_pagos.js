'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Metodos_de_pago extends Model {
    static associate(models) {
      
   Metodos_de_pago.hasMany(models.Pagos, { 
    foreignKey: 'id_Metodos_pago',
    as: 'pagos',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  });

    }
  }
  Metodos_de_pago.init({
    id_metodo_pago: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      
    },
    metodo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'Metodos_de_pagos', // Nombre en singular
    tableName: 'metodos_de_pagos',
    timestamps: true,
  });

  return Metodos_de_pago;
};