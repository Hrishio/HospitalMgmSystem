const { Sequelize } = require("sequelize");
const { createPatientModel } = require("./scripts/models/models.js");
let SchemaModel = null;

const sequelize = new Sequelize("hospitalMgmSystem", "postgres", "hrishio", {
  host: "localhost",
  dialect: "postgres",
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    SchemaModel = await createPatientModel(sequelize); // Initialize model
    console.log("SchemaModel:", SchemaModel);
    // await sequelize.sync({ alter: true });
    await sequelize.sync();
    console.log("Connection is Successful");
    console.log("Synced Database");
  } catch (error) {
    console.log("Unable to connect to database: ", error);
  }
};
const getSchemaModel = () => SchemaModel;

module.exports = { connection, getSchemaModel };
