const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("hospitalMgmSystem", "postgres", "rootuser", {
  host: "localhost",
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.PatientNames = require("./models")(sequelize, Sequelize);

module.exports = db;
