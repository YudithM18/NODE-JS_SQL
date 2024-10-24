'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Habitacion extends Model {
    static associate(models) {
   Habitacion.belongsTo(models.Status_room, { 
    foreignKey: 'id_status_room',
    as: 'status_room',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  });



    }
  }
  Habitacion.init({
    id_habitacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      
    },
    room_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    id_status_room: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Status_room',
        key: 'id',
      }
    }

  }, {
    sequelize,
    modelName: 'Habitacion', // Nombre en singular
    tableName: 'habitaciones',
    timestamps: true,
  });

  return Habitacion;
};
