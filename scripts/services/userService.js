const {
  createEntity,
  getAllEntities,
  getEntityById,
  updateEntity,
  deleteEntity,
  getDeletedEntities,
} = require("./genericService.js");

const PatientDTO = require("../dtos/patient.dto.js");
const EmployeeDTO = require("../dtos/emp.dto.js");

const { connection, getSchemaModel } = require("../../database.js");

const createPatient = async (patientData) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const patientDTO = new PatientDTO(patientData);
  return createEntity(SchemaModel.Patients, patientDTO);
};

const createEmployee = async (empData) => {
  const SchemaModel = getSchemaModel();
  const empDTO = new EmployeeDTO(empData);
  return createEntity(SchemaModel.Employee, empDTO);
};

const getAllPatients = async () => {
  const SchemaModel = getSchemaModel();
  return getAllEntities(SchemaModel.Patients);
};
const getAllEmployees = async () => {
  const SchemaModel = getSchemaModel();
  return getAllEntities(SchemaModel.Employee);
};

const getPatientById = async (patientId) => {
  const SchemaModel = getSchemaModel();
  return getEntityById(SchemaModel.Patients, "patientId", patientId);
};
const getEmployeeById = async (empId) => {
  const SchemaModel = getSchemaModel();
  return getEntityById(SchemaModel.Employee, "empId", empId);
};

const updatePatient = async (patientId, patientData) => {
  const SchemaModel = getSchemaModel();
  updateEntity(SchemaModel.Patients, "patientId", patientId, patientData);
};
const updateEmployee = async (empId, empData) => {
  const SchemaModel = getSchemaModel();
  updateEntity(SchemaModel.Employee, "empId", empId, empData);
};

const deletePatientById = async (patientId) => {
  const SchemaModel = getSchemaModel();
  deleteEntity(SchemaModel.Patients, "patientId", patientId);
};
const deleteEmployeeById = async (empId) => {
  const SchemaModel = getSchemaModel();
  return deleteEntity(SchemaModel.Employee, "empId", empId);
};

const getDeletedPatients = async () => {
  const SchemaModel = getSchemaModel();
  return getDeletedEntities(SchemaModel.Patients);
};
const getDeletedEmployees = async () => {
  const SchemaModel = getSchemaModel();
  getDeletedEntities(SchemaModel.Employee);
};

module.exports = {
  createPatient,
  createEmployee,
  getAllPatients,
  getAllEmployees,
  getPatientById,
  getEmployeeById,
  updatePatient,
  updateEmployee,
  deletePatientById,
  deleteEmployeeById,
  getDeletedPatients,
  getDeletedEmployees,
};
