"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Appointments",
      {
        appId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        appDate: {
          type: DataTypes.STRING(50),
          allowNull: true, // Optional based on your requirement
        },
        reason: {
          type: DataTypes.TEXT(),
          allowNull: true,
        },
        patientId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        deletedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        createdBy: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        updatedBy: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        paranoid: true, // Enable soft deletion
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Appointments");
  },
};
