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
exports.createDept = async (req, res) => {
  try {
    // Create a new patient entry
    const dept = await entityService.createDept(req.body);
    res.status(CREATED).json({ message: CREATEDM, dept });
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: CREATE_ENTITY_ERROR });
  }
};

//GetAll patients.
exports.getAllDept = async (req, res) => {
  try {
    const allDept = await entityService.getAllDept();
    res.status(OK).json({ message: FOUND, allDept });

    // Fetch all patients

    if (!allDept.length) {
      return res.status(NOT_FOUND).json({ error: GET_ENTITY_ERROR });
    }
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: GET_ENTITY_ERROR });
  }
};

//Get [patient by ID]:

exports.updateDept = async (req, res) => {
  let deptId = req.params.deptId;
  try {
    console.log(req.body);
    const dept = await entityService.updateDept(deptId, req.body);
    if (!dept) {
      res.status(NOT_FOUND).json({ Error: UPDATE_ENTITY_ERROR });
    }
    return res.status(CREATED).json({ message: UPDATED, dept });
  } catch (error) {
    console.log("Error : ", error);
    res.status(SERVER_ERROR).json({ Error: UPDATE_ENTITY_ERROR });
  }
};

//Delete Patient:

exports.deleteDeptById = async (req, res) => {
  let deptId = req.params.deptId;

  try {
    const dept = await entityService.deleteDeptById(deptId);
    if (dept == null) {
      return res.status(NOT_FOUND).json({ message: DELETE_ENTITY_ERROR });
    }
    return res.status(OK).json({ message: DELETED });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: DELETE_ENTITY_ERROR });
  }
};

//Find Patient by ID:
exports.getDeptById = async (req, res) => {
  let deptId = req.params.deptId;
  //   console.log("patientId : ", deptId);
  try {
    const dept = await entityService.getDeptById(deptId);
    if (dept == null) {
      return res.status(NOT_FOUND).json({ message: ENTITY_NOT_FOUND });
    }
    return res.status(OK).json({ message: FOUND, dept });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: ENTITY_NOT_FOUND });
  }
};

//Find deleted patients
exports.getDeletedDept = async (req, res) => {
  try {
    const getDeletedDept = await entityService.getDeletedDept();
    if (!getDeletedDept.length) {
      return res.status(NOT_FOUND).json({ message: ENTITY_NOT_FOUND });
    }
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: INTERNAL_SERVER_ERROR });
  }
};

/*
This logic is for refrence of how to use deletedAt field in industry level.

    const foundPatient = SchemaModel.Patients.findOne({
      where: { deletedAt: !null },
    });
    if (foundPatient == 0) {
     const foundPatient = SchemaModel.Patients.findOne({
      where: { deletedAt: !null },
    });
    if (foundPatient == 0) {
      const patient = await SchemaModel.Patients.create({
        first_name,
        last_name,
        gender,
        address,
        email,
        dob,
        phone_number,
        employee_id,
        createdBy,
        updatedBy,
      });

    } else {
      res.status(404).json({ message: "already Deleted" });
    }
*/
