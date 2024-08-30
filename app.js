const express = require("express");
const app = express();
const PORT = 8000;
const patientRouter = require("./scripts/routes/patientRoutes.js");
const employeeRouter = require("./scripts/routes/empRoutes.js");
const deptRouter = require("./scripts/routes/deptRoutes.js");
const medRouter = require("./scripts/routes/medRoutes.js");
const appRouter = require("./scripts/routes/appRoutes.js");
const { connection } = require("./database.js");

const startServer = async () => {
  try {
    await connection(); // Wait for the database connection
    console.log("Database connection established");

    app.use(express.json());

    app.use("/patients", patientRouter);
    app.use("/employees", employeeRouter);
    app.use("/departments", deptRouter);
    app.use("/medicines", medRouter);
    app.use("/appointments", appRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server: ", error);
  }
};

startServer();
