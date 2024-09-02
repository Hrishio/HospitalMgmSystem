const { Op } = require("sequelize");

const createEntity = async (Model, dto) => {
  const entity = await Model.create(dto);
  return entity;
};

const getAllEntities = async (Model) => {
  const entities = await Model.findAll();
  return entities;
};

const getEntityById = async (Model, idField, id) => {
  const entity = await Model.findOne({ where: { [idField]: id } });
  return entity;
};

const updateEntity = async (Model, idField, id, data) => {
  const [updated] = await Model.update(data, { where: { [idField]: id } });
  return updated;
};

const deleteEntity = async (Model, idField, id) => {
  const entity = await Model.findOne({ where: { [idField]: id } });
  console.log("entity : ", entity);
  if (!entity) {
    throw new Error("Not Found !!");
  }
  await entity.destroy();
};

const getDeletedEntities = async (Model) => {
  const entities = await Model.findAll({
    where: { deletedAt: { [Op.not]: null } },
  });
  console.log("entities : ", entities);
  if (!entities) {
    throw new Error("Not found");
  }

  return entities;
};

module.exports = {
  createEntity,
  getAllEntities,
  getEntityById,
  updateEntity,
  deleteEntity,
  getDeletedEntities,
};
