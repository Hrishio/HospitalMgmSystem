"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const PatientDepartment = sequelize.define("PatientDepartment", {
    patientId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Patients",
        key: "patientId",
      },
    },
    departmentId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Departments",
        key: "deptId",
      },
    },
  });

  return PatientDepartment;
};
