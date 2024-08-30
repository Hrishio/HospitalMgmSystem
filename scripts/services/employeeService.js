const EmployeeDTO = require("../dtos/emp.dto.js");

const { Op } = require("sequelize");

const createEmployee = async (empData) => {
  console.log("empData : ", empData);
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const empDTO = new EmployeeDTO(empData);
  const employee = await SchemaModel.Employee.create(empDTO);
  return employee;
};
const getAllEmployee = async () => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const employee = await SchemaModel.Employee.findAll();
  return employee;
};

const updateEmployee = async (empId, empData) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const [updated] = await SchemaModel.Employee.update(empData, {
    where: { empId },
  });

  return updated;
};

const getEmpById = async (empId) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const employee = await SchemaModel.Employee.findOne({
    where: { empId },
  });
  return employee;
};

const deleteEmpById = async (empId) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const employee = await SchemaModel.Employee.findOne({ where: { empId } });
  if (!employee) {
    throw new Error("Not Found");
  }

  await employee.destroy();

  return employee;
};

const getDeletedEmp = async () => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const employee = await SchemaModel.Employee.findAll({
    where: { deletedAt: { [Op.not]: null } },
  });
};

module.exports = {
  createEmployee,
  getAllEmployee,
  updateEmployee,
  getEmpById,
  deleteEmpById,
  getDeletedEmp,
};
