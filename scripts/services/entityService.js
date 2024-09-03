const {
  createEntity,
  getAllEntities,
  getEntityById,
  updateEntity,
  deleteEntity,
  getDeletedEntities,
  filterEntities,
} = require("./genericService.js");

const MedDTO = require("../dtos/med.dto.js");
const DeptDTO = require("../dtos/dept.dto.js");
const AppDTO = require("../dtos/app.dto.js");

const { connection, getSchemaModel } = require("../../database.js");

const createMed = async (medData) => {
  const SchemaModel = getSchemaModel();
  const medDTO = new MedDTO(medData);
  return createEntity(SchemaModel.Medicines, medDTO);
};

const createDept = async (deptData) => {
  const SchemaModel = getSchemaModel();
  const deptDTO = new DeptDTO(deptData);
  return createEntity(SchemaModel.Department, deptDTO);
};

const createApp = async (appData) => {
  const SchemaModel = getSchemaModel();
  const appDTO = new AppDTO(appData);
  return createEntity(SchemaModel.Appointment, appDTO);
};

const getAllMed = async () => {
  const SchemaModel = getSchemaModel();
  return getAllEntities(SchemaModel.Medicines);
};
const getAllDept = async () => {
  const SchemaModel = getSchemaModel();
  return getAllEntities(SchemaModel.Department);
};
const getAllApp = async () => {
  const SchemaModel = getSchemaModel();
  return getAllEntities(SchemaModel.Appointment);
};

const getMedById = async (medId) => {
  const SchemaModel = getSchemaModel();
  return getEntityById(SchemaModel.Medicines, "medId", medId);
};
const getDeptById = async (deptId) => {
  const SchemaModel = getSchemaModel();
  return getEntityById(SchemaModel.Department, "deptId", deptId);
};
const getAppById = async (appId) => {
  const SchemaModel = getSchemaModel();
  return getEntityById(SchemaModel.Appointment, "appId", appId);
};

const updateMed = async (medId, medData) => {
  const SchemaModel = getSchemaModel();
  return updateEntity(SchemaModel.Medicines, "medId", medId, medData);
};
const updateDept = async (deptId, deptData) => {
  const SchemaModel = getSchemaModel();
  return updateEntity(SchemaModel.Department, "deptId", deptId, deptData);
};
const updateApp = async (appId, appData) => {
  const SchemaModel = getSchemaModel();
  return updateEntity(SchemaModel.Appointment, "appId", appId, appData);
};

const deleteMedById = async (medId) => {
  const SchemaModel = getSchemaModel();
  deleteEntity(SchemaModel.Medicines, "medId", medId);
};
const deleteDeptById = async (deptId) => {
  const SchemaModel = getSchemaModel();
  deleteEntity(SchemaModel.Department, "deptId", deptId);
};
const deleteAppByID = async (appId) => {
  const SchemaModel = getSchemaModel();
  deleteEntity(SchemaModel.Appointment, "appId", appId);
};

const getDeletedMed = async () => {
  const SchemaModel = getSchemaModel();
  getDeletedEntities(SchemaModel.Medicines);
};
const getDeletedDept = async () => {
  const SchemaModel = getSchemaModel();
  getDeletedEntities(SchemaModel.Department);
};
const getDeletedApp = async () => {
  const SchemaModel = getSchemaModel();
  getDeletedEntities(SchemaModel.Appointment);
};

const filterMeds = async (filters) => {
  const SchemaModel = getSchemaModel();
  return filterEntities(SchemaModel.Medicines, filters);
};

const filterDepts = async (filters) => {
  const SchemaModel = getSchemaModel();
  return filterEntities(SchemaModel.Department, filters);
};

const filterApps = async (filters) => {
  const SchemaModel = getSchemaModel();
  return filterEntities(SchemaModel.Appointment, filters);
};

module.exports = {
  createMed,
  createDept,
  createApp,
  getAllMed,
  getAllDept,
  getAllApp,
  getMedById,
  getDeptById,
  getAppById,
  updateMed,
  updateDept,
  updateApp,
  deleteMedById,
  deleteDeptById,
  deleteAppByID,
  getDeletedMed,
  getDeletedDept,
  getDeletedApp,
  filterMeds,
  filterDepts,
  filterApps,
};
