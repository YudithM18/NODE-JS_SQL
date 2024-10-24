'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Reserva extends Model {
    static associate(models) {
      Reserva.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      });
      Reserva.hasMany(models.Pagos, {
        foreignKey: 'id_reserva',
        as: 'pagos',
      });
      Reserva.belongsTo(models.Status_reserve, {
        foreignKey: 'id_status_reserve',
        as: 'status_reserve',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      });
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
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuario',
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
      references: {
        model: 'Status_reserve',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Reserva',
    tableName: 'reservas',
    timestamps: true,
  });

  return Reserva;
};
