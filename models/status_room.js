'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Status_room extends Model {
    static associate(models) {
      
    Status_room.hasMany(models.Habitacion, { 
    foreignKey: 'id_status_room',
    as: 'habitaciones',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  });

    }
  }
  Status_room.init({
    id_status_room: {
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
    modelName: 'Status_room', // Nombre en singular
    tableName: 'status_room',
    timestamps: true,
  });

  return Status_room;
};




