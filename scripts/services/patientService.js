// const { Patients } = require("../models/models.js");

const PatientDTO = require("../dtos/patient.dto.js");

const { Op } = require("sequelize");

const createPatient = async (patientData) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const patientDTO = new PatientDTO(patientData);
  const patient = await SchemaModel.Patients.create(patientDTO);
  return patient;
};
const getAllPatients = async () => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const patient = await SchemaModel.Patients.findAll();
  return patient;
};

const updatePatient = async (patientId, patientData) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const [updated] = await SchemaModel.Patients.update(patientData, {
    where: { patientId },
  });

  return updated;
};

const getPatientById = async (patientId) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const patient = await SchemaModel.Patients.findOne({
    where: { patientId },
  });
  return patient;
};

const deletePatientById = async (patientId) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const patient = await SchemaModel.Patients.findOne({ where: { patientId } });
  if (!patient) {
    throw new Error("Not Found");
  }

  await patient.destroy();

  return patient;
};

const getDeletedPatients = async () => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const patient = await SchemaModel.Patients.findAll({
    where: { deletedAt: { [Op.not]: null } },
  });
};

module.exports = {
  createPatient,
  getAllPatients,
  updatePatient,
  getPatientById,
  deletePatientById,
  getDeletedPatients,
};
