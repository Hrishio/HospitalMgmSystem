// const { Patients } = require("../models/models.js");

const DeptDTO = require("../dtos/dept.dto.js");

const { Op } = require("sequelize");

const createDept = async (deptData) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const deptDTO = new DeptDTO(deptData);
  const dept = await SchemaModel.Department.create(deptDTO);
  return dept;
};
const getAllDept = async () => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const dept = await SchemaModel.Department.findAll();
  return dept;
};

const updateDept = async (deptId, deptData) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const [updated] = await SchemaModel.Department.update(deptData, {
    where: { deptId },
  });

  return updated;
};

const getDeptById = async (deptId) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const dept = await SchemaModel.Department.findOne({
    where: { deptId },
  });
  return dept;
};

const deleteDeptById = async (deptId) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const dept = await SchemaModel.Department.findOne({ where: { deptId } });
  if (!dept) {
    throw new Error("Not Found");
  }

  await dept.destroy();

  return dept;
};

const getDeletedDept = async () => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const dept = await SchemaModel.Department.findAll({
    where: { deletedAt: { [Op.not]: null } },
  });
};

module.exports = {
  createDept,
  getAllDept,
  updateDept,
  getDeptById,
  deleteDeptById,
  getDeletedDept,
};
