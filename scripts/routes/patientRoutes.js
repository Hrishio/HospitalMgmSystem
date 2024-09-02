const express = require("express");
const {
  createPatient,
  getAllPatients,
  updatePatient,
  deletePatient,
  findPatientById,
  getDeletedPatients,
  filterPatient,
} = require("../controllers/patientController.js");

const router = express.Router();

//Get all Patients
router.get("/", getAllPatients);

//Create Patient.
router.post("/new", createPatient);

//find Deleted patients
router.get("/deleted", getDeletedPatients);

// Get a specific patient by ID
router
  .get("/:patientId", findPatientById)
  .put("/:patientId", updatePatient)
  .delete("/:patientId", deletePatient);

router.get("/", filterPatient);

module.exports = router;
