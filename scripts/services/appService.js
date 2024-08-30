const AppDTO = require("../dtos/app.dto.js");

const { Op } = require("sequelize");

const createApp = async (appData) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const appDTO = new AppDTO(appData);
  const app = await SchemaModel.Appointment.create(appDTO);
  return app;
};
const getAllApp = async () => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const app = await SchemaModel.Appointment.findAll();
  return app;
};

const updateApp = async (appId, appData) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const [updated] = await SchemaModel.Appointment.update(appData, {
    where: { appId },
  });

  return updated;
};

const getAppById = async (appId) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const app = await SchemaModel.Appointment.findOne({
    where: { appId },
  });
  return app;
};

const deleteAppByID = async (appId) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const app = await SchemaModel.Appointment.findOne({ where: { appId } });
  if (!app) {
    throw new Error("Not Found");
  }

  await app.destroy();

  return app;
};

const getDeletedApp = async () => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const app = await SchemaModel.Appointment.findAll({
    where: { deletedAt: { [Op.not]: null } },
  });
};

module.exports = {
  createApp,
  getAllApp,
  updateApp,
  getAppById,
  deleteAppByID,
  getDeletedApp,
};
