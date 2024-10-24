'use strict';
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  class Pagos extends Model {

    static associate(models) {
      Pagos.belongsTo(models.metodos_de_pagos, {
        foreignKey: 'id',
        as: 'metodos_de_pagos'
      });
      Pagos.belongsTo(models.reserva, {
        foreignKey: 'id',
        as: 'reserva'
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
    id_reserva:{
      type:DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Reserva',
        key: 'id',
      }
    },
    total_pago:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    }, 
    fecha_pago: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_metodo_pago:{
      type:DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'metodos_de_pagos',
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'Pagos', // Nombre en singular
    tableName: 'pagos',
    timestamps: true,
  });
  return Pagos;
}