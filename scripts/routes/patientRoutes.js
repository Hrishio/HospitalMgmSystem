const express = require("express");
const {
  createPatient,
  getAllPatients,
  updatePatient,
  deletePatient,
  findPatientById,
} = require("../controllers/patientController.js");

const router = express.Router();

//Get all Patients
router.get("/", getAllPatients);

//Create Patient.
router.post("/new", createPatient);

// Get a specific patient by ID
router.get("/:patientId", findPatientById);

// Update a patient by ID
router.put("/:patientId", updatePatient);

// Delete a patient by ID
router.delete("/:patientId", deletePatient);

module.exports = router;
