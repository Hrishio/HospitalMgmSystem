const patientService = require("../services/patientService.js");

const {
  CREATE_PATIENT_ERROR,
  GET_PATIENTS_ERROR,
  UPDATE_PATIENTS_ERROR,
  DELETE_PATIENTS_ERROR,
  PATIENT_NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../constants/errorMessages.js");
const {
  SERVER_ERROR,
  CREATED,
  OK,
  NOT_FOUND,
} = require("../constants/statusCodes.js");

//Create new patient:
exports.createPatient = async (req, res) => {
  try {
    // Create a new patient entry
    const patient = await patientService.createPatient(req.body);
    res.status(CREATED).json({ message: "Patient Added", patient });
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: CREATE_PATIENT_ERROR });
  }
};

//GetAll patients.
exports.getAllPatients = async (req, res) => {
  try {
    const allPatients = await patientService.getAllPatients();
    res.status(OK).json({ message: "Found", allPatients });

    // Fetch all patients

    if (!allPatients.length) {
      return res.status(NOT_FOUND).json({ error: GET_PATIENTS_ERROR });
    }
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: GET_PATIENTS_ERROR });
  }
};

//Get [patient by ID]:

exports.updatePatient = async (req, res) => {
  let patientId = req.params.patientId;
  try {
    console.log(req.body);
    const patient = await patientService.updatePatient(patientId, req.body);
    if (!patient) {
      res.status(NOT_FOUND).json({ Error: UPDATE_PATIENTS_ERROR });
    }
    return res
      .status(CREATED)
      .json({ message: "Updated Successfuly", patient });
  } catch (error) {
    console.log("Error : ", error);
    res.status(SERVER_ERROR).json({ Error: UPDATE_PATIENTS_ERROR });
  }
};

//Delete Patient:

exports.deletePatient = async (req, res) => {
  let patientId = req.params.patientId;

  try {
    const patient = await patientService.deletePatientById(patientId);
    if (patient == null) {
      return res.status(NOT_FOUND).json({ message: DELETE_PATIENTS_ERROR });
    }
    return res.status(OK).json({ message: "Deleted Successfuly" });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: DELETE_PATIENTS_ERROR });
  }
};

//Find Patient by ID:
exports.findPatientById = async (req, res) => {
  let patientId = req.params.patientId;
  console.log("patientId : ", patientId);
  try {
    const patient = await patientService.getPatientById(patientId);
    if (patient == null) {
      return res.status(NOT_FOUND).json({ message: PATIENT_NOT_FOUND });
    }
    return res.status(OK).json({ message: "Found Patient", patient });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: PATIENT_NOT_FOUND });
  }
};

//Find deleted patients
exports.getDeletedPatients = async (req, res) => {
  try {
    const deletedPatients = await patientService.getDeletedPatients();
    if (!deletedPatients.length) {
      return res.status(NOT_FOUND).json({ message: PATIENT_NOT_FOUND });
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
