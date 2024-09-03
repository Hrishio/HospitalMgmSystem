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

const {
  paginationMiddleware,
  searchMiddleware,
  sortMiddleware,
} = require("../middlewares/index.js");

const router = express.Router();

//Get all Patients
router.get(
  "/",
  paginationMiddleware,
  searchMiddleware,
  sortMiddleware,
  getAllPatients
);

//Filtering
// router.get(
//   "/",
//   paginationMiddleware,
//   searchMiddleware,
//   sortMiddleware,
//   filterPatient
// );

//Create Patient.
router.post("/new", createPatient);

//find Deleted patients
router.get("/deleted", getDeletedPatients);

// Get a specific patient by ID
router
  .get("/:patientId", findPatientById)
  .put("/:patientId", updatePatient)
  .delete("/:patientId", deletePatient);

// router.get("/", filterPatient);

module.exports = router;
