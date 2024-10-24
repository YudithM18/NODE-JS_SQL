'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Pagos extends Model {
    static associate(models) {
      Pagos.belongsTo(models.Metodos_de_pagos, { // Corrige el nombre del modelo
        foreignKey: 'id_metodo_pago',
        as: 'metodo_pago', // Cambié a singular
      });
      Pagos.belongsTo(models.Reserva, { // Corrige el nombre del modelo
        foreignKey: 'id_reserva',
        as: 'reserva',
      });
    }
  }

  Pagos.init({
    id_pago: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_reserva: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Reservas', // Asegúrate de que este nombre esté en plural
        key: 'id_reserva', // Este debe coincidir con la clave primaria del modelo Reserva
      }
    },
    total_pago: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    fecha_pago: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_metodo_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Metodos_de_pagos', // Corrige el nombre del modelo
        key: 'id_metodo_pago', // Este debe coincidir con la clave primaria del modelo Metodos_de_pagos
      }
    },
  }, {
    sequelize,
    modelName: 'Pagos',
    tableName: 'pagos',
    timestamps: true,
  });

  return Pagos;
};
