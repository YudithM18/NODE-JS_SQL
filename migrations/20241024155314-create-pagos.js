'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pagos', {
      id_pago: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_reserva: {
        type: Sequelize.INTEGER,
        references: {
          model: 'reservas',
          key: 'id',
        }
      },
      total_pago: {
        type: Sequelize.DECIMAL
      },
      fecha_pago: {
        type: Sequelize.DATE
      },
      id_metodo_pago: {
        type: Sequelize.INTEGER,
        references: {
          model: 'metodos_de_pagos',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pagos');
  }
};