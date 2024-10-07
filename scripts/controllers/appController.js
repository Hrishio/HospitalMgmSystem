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
exports.createApp = async (req, res) => {
  try {
    // Create a new patient entry
    const app = await entityService.createApp(req.body);
    res.status(CREATED).json({ message: CREATED, app });
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: CREATE_ENTITY_ERROR });
  }
};

//GetAll patients.
exports.getAllApp = async (req, res) => {
  try {
    const allApp = await entityService.getAllApp();
    res.status(OK).json({ message: FOUND, allApp });

    // Fetch all patients

    if (!allApp.length) {
      return res.status(NOT_FOUND).json({ error: GET_ENTITY_ERROR });
    }
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: GET_ENTITY_ERROR });
  }
};

//Get [patient by ID]:

exports.updateApp = async (req, res) => {
  let appId = req.params.appId;
  try {
    console.log(req.body);
    const app = await entityService.updateApp(appId, req.body);
    if (!app) {
      res.status(NOT_FOUND).json({ Error: UPDATE_ENTITY_ERROR });
    }
    return res.status(CREATED).json({ message: UPDATED, app });
  } catch (error) {
    console.log("Error : ", error);
    res.status(SERVER_ERROR).json({ Error: UPDATE_ENTITY_ERROR });
  }
};

//Delete Patient:

exports.deleteAppById = async (req, res) => {
  let appId = req.params.appId;

  try {
    const app = await entityService.deleteDeptById(appId);
    if (app == null) {
      return res.status(NOT_FOUND).json({ message: DELETE_ENTITY_ERROR });
    }
    return res.status(OK).json({ message: DELETED });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: DELETE_ENTITY_ERROR });
  }
};

//Find Patient by ID:
exports.getAppById = async (req, res) => {
  let appId = req.params.appId;
  try {
    const app = await entityService.getAppById(appId);
    if (app == null) {
      return res.status(NOT_FOUND).json({ message: ENTITY_NOT_FOUND });
    }
    return res.status(OK).json({ message: FOUND, app });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: ENTITY_NOT_FOUND });
  }
};

//Find deleted patients
exports.getDeletedApp = async (req, res) => {
  try {
    const deletedApp = await entityService.getDeletedApp();
    if (!deletedApp.length) {
      return res.status(NOT_FOUND).json({ message: ENTITY_NOT_FOUND });
    }
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: INTERNAL_SERVER_ERROR });
  }
};
