"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "PatientDepartments",
      {
        patientId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Patients", // Name of the table being referenced
            key: "patientId", // Column in the referenced table
          },
          onDelete: "CASCADE", // Handle deletions
          onUpdate: "CASCADE", // Handle updates
        },
        departmentId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Departments", // Name of the table being referenced
            key: "deptId", // Column in the referenced table
          },
          onDelete: "CASCADE", // Handle deletions
          onUpdate: "CASCADE", // Handle updates
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.NOW, // Default to the current timestamp
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.NOW, // Default to the current timestamp
        },
      },
      {
        paranoid: true, // Enable soft deletion (if applicable)
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PatientDepartments");
  },
};
