"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Patients",
      {
        patientId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        first_name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        gender: {
          type: DataTypes.CHAR(1),
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: true,
          validate: {
            isLowercase: true, // Ensure email is lowercase
          },
        },
        dob: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        phone_number: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        employee_id: {
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
    await queryInterface.dropTable("Patients");
  },
};
