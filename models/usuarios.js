'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Usuarios extends Model {
    static associate(models) {
      
   Usuarios.hasMany(models.Reserva, { 
    foreignKey: 'id_usuario',
    as: 'reserva',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  });

    }
  }
   Usuarios.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'Usuario', // Nombre en singular
    tableName: 'usuarios',
    timestamps: true,
  });

  return Usuarios;
};