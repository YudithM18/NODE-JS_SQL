'use strict';
const { Model, DataTypes } = require('sequelize');

// Exporta una función que recibe una instancia de sequelize
module.exports = (sequelize) => {
  // Define la clase 'Status_reserve' que extiende de Model
  class Status_reserve extends Model {
    // Método para definir asociaciones
    static associate(models) {
      // Asociación con el modelo 'Reserva'
      Status_reserve.hasMany(models.Reserva, { // Asegúrate de que el modelo se llame 'Reserva'
        foreignKey: 'id_status_reserve', // Clave foránea en 'Reserva'
        as: 'reservas',                   // Alias para la asociación
        onUpdate: 'CASCADE',              // Actualiza las referencias en cascada
        onDelete: 'SET NULL'              // Establece a NULL si se elimina el registro relacionado
      });
    }
  }

  // Inicializa el modelo 'Status_reserve'
  Status_reserve.init({
    id_status_reserve: {
      type: DataTypes.INTEGER, // Tipo de dato para el ID de estado de reserva
      primaryKey: true,        // Este campo es la clave primaria
      autoIncrement: true,     // Se incrementa automáticamente
      allowNull: false,        // No puede ser nulo
    },
    status: {
      type: DataTypes.STRING,   // Tipo de dato para el estado de reserva
      allowNull: false,         // No puede ser nulo
    },
  }, {
    sequelize,                // Instancia de sequelize
    modelName: 'Status_reserve', // Nombre del modelo en singular
    tableName: 'status_reserve',  // Nombre de la tabla en la base de datos
    timestamps: true,         // Habilita los campos 'createdAt' y 'updatedAt'
  });

  return Status_reserve; // Retorna el modelo 'Status_reserve'
};
