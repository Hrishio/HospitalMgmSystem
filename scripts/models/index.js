const { Sequelize } = require("sequelize");
const PatientsModel = require("./models.js");
const DepartmentModel = require("./models.js");
const MedicinesModel = require("./models.js");
const AppointmentModel = require("./models.js");
const PatientMedicinesModel = require("./patientMedicines");
const PatientDepartmentModel = require("./patientDepartment");

const sequelize = new Sequelize("hospitalMgmSystem", "postgres", "rootuser", {
  host: "localhost",
  dialect: "postgres",
});

const Patients = PatientsModel(sequelize);
const Department = DepartmentModel(sequelize);
const Medicines = MedicinesModel(sequelize);
const Appointment = AppointmentModel(sequelize);
const PatientMedicines = PatientMedicinesModel(sequelize);
const PatientDepartment = PatientDepartmentModel(sequelize);

// Set up associations
Patients.belongsToMany(Department, {
  through: PatientDepartment,
  foreignKey: "patientId",
});
Department.belongsToMany(Patients, {
  through: PatientDepartment,
  foreignKey: "departmentId",
});

Patients.belongsToMany(Medicines, {
  through: PatientMedicines,
  foreignKey: "patientId",
});
Medicines.belongsToMany(Patients, {
  through: PatientMedicines,
  foreignKey: "medId",
});

// Other associations if needed

module.exports = {
  sequelize,
  Patients,
  Department,
  Medicines,
  Appointment,
  PatientMedicines,
  PatientDepartment,
};
