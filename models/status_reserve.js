'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Status_reserve extends Model {
    static associate(models) {
      
   Status_reserve.hasMany(models.Reservas, { // Cambiar 'Pedidos' a 'pedidos'
    foreignKey: 'id_status_reserve',
    as: 'reservas',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  });

    }
  }
  Status_reserve.init({
    id_status_reserve: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'Status_reserve', // Nombre en singular
    tableName: 'status_reserve',
    timestamps: true,
  });

  return Status_reserve;
};




