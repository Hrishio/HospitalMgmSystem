const MedDTO = require("../dtos/med.dto.js");

const { Op } = require("sequelize");

const createMed = async (medData) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const medDTO = new MedDTO(medData);
  const med = await SchemaModel.Medicines.create(medDTO);
  return med;
};
const getAllMed = async () => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const med = await SchemaModel.Medicines.findAll();
  return med;
};

const updateMed = async (medId, medData) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const [updated] = await SchemaModel.Medicines.update(medData, {
    where: { medId },
  });

  return updated;
};

const getMedById = async (medId) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const med = await SchemaModel.Medicines.findOne({
    where: { medId },
  });
  return med;
};

const deleteMedById = async (medId) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const med = await SchemaModel.Medicines.findOne({ where: { medId } });
  if (!med) {
    throw new Error("Not Found");
  }

  await med.destroy();

  return med;
};

const getDeletedMed = async () => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const med = await SchemaModel.Medicines.findAll({
    where: { deletedAt: { [Op.not]: null } },
  });
};

module.exports = {
  createMed,
  getAllMed,
  updateMed,
  getMedById,
  deleteMedById,
  getDeletedMed,
};
