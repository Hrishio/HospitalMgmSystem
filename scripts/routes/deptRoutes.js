const express = require("express");
const {
  createDept,
  getAllDept,
  updateDept,
  deleteDeptById,
  getDeptById,
  getDeletedDept,
} = require("../controllers/deptController.js");

const router = express.Router();

//Get all Patients
router.get("/", getAllDept);

//Create Patient.
router.post("/new", createDept);

//find Deleted patients
router.get("/deleted", getDeletedDept);

// Get a specific patient by ID
router
  .get("/:deptId", getDeptById)
  .put("/:deptId", updateDept)
  .delete("/:deptId", deleteDeptById);

module.exports = router;
