/*
{
  createMed,
  getAllMed,
  updateMed,
  getMedById,
  deleteMedById,
  getDeletedMed,
}
*/
const entityService = require("../services/entityService.js");

const {
  GET_ENTITY_ERROR,
  DELETE_ENTITY_ERROR,
  ENTITY_NOT_FOUND,
  UPDATE_ENTITY_ERROR,
  CREATE_ENTITY_ERROR,
  INTERNAL_SERVER_ERROR,
  UPDATED,
  DELETED,
  FOUND,
  CREATEDM,
} = require("../constants/errorMessages.js");
const {
  SERVER_ERROR,
  CREATED,
  OK,
  NOT_FOUND,
} = require("../constants/statusCodes.js");

//Create new patient:
exports.createMed = async (req, res) => {
  try {
    // Create a new patient entry
    const med = await entityService.createMed(req.body);
    res.status(CREATED).json({ message: CREATEDM, med });
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: CREATE_ENTITY_ERROR });
  }
};

//GetAll patients.
exports.getAllMed = async (req, res) => {
  try {
    const allMed = await entityService.getAllMed();
    res.status(OK).json({ message: FOUND, allMed });

    // Fetch all patients

    if (!allMed.length) {
      return res.status(NOT_FOUND).json({ error: GET_ENTITY_ERROR });
    }
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: GET_ENTITY_ERROR });
  }
};

//Get [patient by ID]:

exports.updateMed = async (req, res) => {
  let medId = req.params.medId;
  try {
    console.log(req.body);
    const med = await entityService.updateMed(medId, req.body);
    if (!med) {
      res.status(NOT_FOUND).json({ Error: UPDATE_ENTITY_ERROR });
    }
    return res.status(CREATED).json({ message: UPDATED, med });
  } catch (error) {
    console.log("Error : ", error);
    res.status(SERVER_ERROR).json({ Error: UPDATE_ENTITY_ERROR });
  }
};

//Delete Patient:

exports.deleteMedById = async (req, res) => {
  let medId = req.params.medId;

  try {
    const med = await entityService.deleteMedById(medId);
    if (med == null) {
      return res.status(NOT_FOUND).json({ message: DELETE_ENTITY_ERROR });
    }
    return res.status(OK).json({ message: DELETED });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: DELETE_ENTITY_ERROR });
  }
};

//Find Patient by ID:
exports.getMedById = async (req, res) => {
  let medId = req.params.medId;
  //   console.log("patientId : ", deptId);
  try {
    const med = await entityService.getMedById(medId);
    if (med == null) {
      return res.status(NOT_FOUND).json({ message: ENTITY_NOT_FOUND });
    }
    return res.status(OK).json({ message: FOUND, med });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: ENTITY_NOT_FOUND });
  }
};

//Find deleted patients
exports.getDeletedMed = async (req, res) => {
  try {
    const deletedMed = await entityService.getDeletedMed();
    if (!deletedMed.length) {
      return res.status(NOT_FOUND).json({ message: ENTITY_NOT_FOUND });
    }
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: INTERNAL_SERVER_ERROR });
  }
};
