const express = require("express");
const {
  createApp,
  getAllApp,
  updateApp,
  deleteAppById,
  getAppById,
  getDeletedApp,
} = require("../controllers/appController.js");

const router = express.Router();

//Get all Patients
router.get("/", getAllApp);

//Create Patient.
router.post("/new", createApp);

//find Deleted patients
router.get("/deleted", getDeletedApp);

// Get a specific patient by ID
router
  .get("/:appId", getAppById)
  .put("/:appId", updateApp)
  .delete("/:appId", deleteAppById);

module.exports = router;
