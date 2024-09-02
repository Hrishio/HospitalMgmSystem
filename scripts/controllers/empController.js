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

//Create new patient:
exports.createEmployee = async (req, res) => {
  try {
    // Create a new patient entry
    console.log("body : ", req.body);
    const employee = await userService.createEmployee(req.body);
    res.status(CREATED).json({ message: "Employee Added", employee });
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: CREATE_USER_ERROR });
  }
};

//GetAll patients.
exports.getAllEmployees = async (req, res) => {
  try {
    const allEmp = await userService.getAllEmployee();
    res.status(OK).json({ message: "Found", allEmp });

    // Fetch all patients

    if (!allEmp.length) {
      return res.status(NOT_FOUND).json({ error: GET_USER_ERROR });
    }
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({ error: GET_USER_ERROR });
  }
};

//Get [patient by ID]:

exports.updateEmployee = async (req, res) => {
  let empId = req.params.empId;
  try {
    console.log(req.body);
    const employee = await userService.updateEmployee(empId, req.body);
    if (!employee) {
      res.status(NOT_FOUND).json({ Error: UPDATE_USER_ERROR });
    }
    return res
      .status(CREATED)
      .json({ message: "Updated Successfuly", employee });
  } catch (error) {
    console.log("Error : ", error);
    res.status(SERVER_ERROR).json({ Error: UPDATE_USER_ERROR });
  }
};

//Delete Patient:

exports.deleteEmpById = async (req, res) => {
  let empId = req.params.empId;

  try {
    const employee = await userService.deleteEmpById(empId);
    if (employee == null) {
      return res.status(NOT_FOUND).json({ message: DELETE_USER_ERROR });
    }
    return res.status(OK).json({ message: "Deleted Successfuly" });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: DELETE_USER_ERROR });
  }
};

//Find Patient by ID:
exports.getEmpById = async (req, res) => {
  let empId = req.params.empId;
  console.log("patientId : ", empId);
  try {
    const employee = await userService.getEmpById(empId);
    if (employee == null) {
      return res.status(NOT_FOUND).json({ message: USER_NOT_FOUND });
    }
    return res.status(OK).json({ message: "Found Patient", employee });
  } catch (error) {
    res.status(SERVER_ERROR).json({ message: USER_NOT_FOUND });
  }
};

//Find deleted patients
exports.getDeletedEmp = async (req, res) => {
  try {
    const deletedEmp = await userService.getDeletedEmp();
    if (!deletedEmp.length) {
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
