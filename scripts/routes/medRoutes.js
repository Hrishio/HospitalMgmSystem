const express = require("express");
const {
  createMed,
  getAllMed,
  updateMed,
  deleteMedById,
  getMedById,
  getDeletedMed,
} = require("../controllers/medController.js");

const router = express.Router();

//Get all Patients
router.get("/", getAllMed);

//Create Patient.
router.post("/new", createMed);

//find Deleted patients
router.get("/deleted", getDeletedMed);

// Get a specific patient by ID
router
  .get("/:medId", getMedById)
  .put("/:medId", updateMed)
  .delete("/:medId", deleteMedById);

module.exports = router;
