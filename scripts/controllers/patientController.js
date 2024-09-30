const userService = require("../services/userService.js");

const {
  CREATE_USER_ERROR,
  GET_USER_ERROR,
  UPDATE_USER_ERROR,
  DELETE_USER_ERROR,
  USER_NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../constants/errorMessages.js");
const {
  SERVER_ERROR,
  CREATED,
  OK,
  NOT_FOUND,
} = require("../constants/statusCodes.js");
const { getSchemaModel } = require("../../database.js");

//Create new patient:
exports.createPatient = async (req, res) => {
  try {
    // Create a new patient entry
    const patient = await userService.createPatient(req.body);
    res.status(CREATED).json({ message: "Patient Added", patient });
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: CREATE_USER_ERROR });
  }
};

//GetAll patients.
exports.getAllPatients = async (req, res) => {
  try {
    const filterParams = req.query; // Extract filter parameters from query
    const allPatients = filterParams
      ? await userService.filterPatients(filterParams) // Use filter method if parameters are provided
      : await userService.getAllPatients(); // Otherwise, get all patients

    if (!allPatients.length) {
      return res.status(NOT_FOUND).json({ error: GET_USER_ERROR });
    }

    res.status(OK).json({ message: "Found", data: allPatients });
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: GET_USER_ERROR });
  }
};

//Get [patient by ID]:

exports.updatePatient = async (req, res) => {
  let patientId = req.params.patientId;
  try {
    console.log(req.body);
    const patient = await userService.updatePatient(patientId, req.body);
    return res
      .status(CREATED)
      .json({ message: "Updated Successfuly", patient });
  } catch (error) {
    console.log("Error : ", error);
    res.status(SERVER_ERROR).json({ Error: UPDATE_USER_ERROR });
  }
};

//Delete Patient:

exports.deletePatient = async (req, res) => {
  let patientId = req.params.patientId;

  try {
    const patient = await genericService.deletePatientById(patientId);
    console.log("patient : ", patient);
    // if (patient == null) {
    //   return res.status(NOT_FOUND).json({ message: DELETE_USER_ERROR });
    // }
    return res.status(OK).json({ message: "Deleted Successfuly" });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: DELETE_USER_ERROR });
  }
};

//Find Patient by ID:
exports.findPatientById = async (req, res) => {
  let patientId = req.params.patientId;
  console.log("patientId : ", patientId);
  try {
    const patient = await userService.getPatientById(patientId);
    if (patient == null) {
      return res.status(NOT_FOUND).json({ message: USER_NOT_FOUND });
    }
    return res.status(OK).json({ message: "Found Patient", patient });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: USER_NOT_FOUND });
  }
};

//Find deleted patients
exports.getDeletedPatients = async (req, res) => {
  try {
    const deletedPatients = await userService.getDeletedPatients();
    if (!deletedPatients.length) {
      return res.status(NOT_FOUND).json({ message: USER_NOT_FOUND });
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
