const express = require("express");
const app = express();
const PORT = 8000;
const patientRouter = require("./scripts/routes/patientRoutes.js");
const { connection } = require("./database.js");

const startServer = async () => {
  try {
    await connection(); // Wait for the database connection
    console.log("Database connection established");

    app.use(express.json());

    app.use("/patients", patientRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server: ", error);
  }
};

startServer();
