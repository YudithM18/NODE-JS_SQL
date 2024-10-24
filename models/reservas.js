'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Reserva extends Model {
    static associate(models) {
      
    Reserva.hasMany(models.Usuario, { 
    foreignKey: 'id_usuario',
    as: 'usuarios',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  });
  Reserva.hasMany(models.Habitacion, {
    foreignKey: 'id_habitacion',
    as: 'habitaciones',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
    });

    Reserva.hasMany(models.Status_reserve, {
      foreignKey: 'id_status_reserve',
      as: 'status_reserve',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })

    }
  }
  Reserva.init({
    id_reserva: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      
    },
    id_usuario: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Usuario',
        key: 'id',
      },
    },
    id_habitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Habitacion',
        key: 'id',
      },
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_status_reserve: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Status_reserve',
        key: 'id',
      },
    },

  }, {
    sequelize,
    modelName: 'Reserva', // Nombre en singular
    tableName: 'reservas',
    timestamps: true,
  });

  return Reserva;
};
