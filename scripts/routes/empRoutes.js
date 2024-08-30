const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmpById,
  getEmpById,
  getDeletedEmp,
} = require("../controllers/empController.js");

const router = express.Router();

//Get all Patients
router.get("/", getAllEmployees);

//Create Patient.
router.post("/new", createEmployee);

//find Deleted patients
router.get("/deleted", getDeletedEmp);

// Get a specific patient by ID
router
  .get("/:empId", getEmpById)
  .put("/:empId", updateEmployee)
  .delete("/:empId", deleteEmpById);

module.exports = router;
