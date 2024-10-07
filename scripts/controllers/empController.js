const userService = require("../services/userService.js");
const {
  CREATE_USER_ERROR,
  UPDATE_USER_ERROR,
  DELETE_USER_ERROR,
  USER_NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  UPDATED,
  DELETED,
  FOUND,
  CREATED,
} = require("../constants/errorMessages.js");
const {
  SERVER_ERROR,
  CREATED,
  OK,
  NOT_FOUND,
} = require("../constants/statusCodes.js");
const { connection, getSchemaModel } = require("../../database.js");

const { filterEmps } = require("../services/userService.js");

//Create new Employees:
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

//Filter Employees.
exports.filterEmployees = async (req, res) => {
  const SchemaModel = getSchemaModel();
  try {
    // Extract query parameters from the request
    const {
      page = 1,
      limit = 10,
      where = "{}", // Default to empty object if not provided
      sortBy = "empId", // Default to 'empId' if not provided
      sortOrder = "asc",
    } = req.query;

    // Parse `where` from JSON string
    const whereConditions = JSON.parse(where);

    // Parse page and limit to integers
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    // Ensure pageNumber and pageSize are valid
    if (
      isNaN(pageNumber) ||
      isNaN(pageSize) ||
      pageNumber < 1 ||
      pageSize < 1
    ) {
      return res.status(400).json({ message: "Invalid page or limit" });
    }

    // Calculate offset
    const offset = (pageNumber - 1) * pageSize;

    // Prepare filter parameters
    const filters = {
      where: whereConditions,
      limit: pageSize,
      offset: offset,
      order: [[sortBy, sortOrder]],
    };

    // Fetch employees using the filter parameters from the service
    const employees = await filterEmps(filters);

    // Total count of employees
    const totalEmployees = await SchemaModel.Employee.count({
      where: whereConditions,
    });

    // Check if employees were found and respond accordingly
    if (employees.length === 0) {
      return res.status(404).json({ message: "No employees found" });
    }

    const totalPages = Math.ceil(totalEmployees / pageSize);
    const nextPage = pageNumber < totalPages ? pageNumber + 1 : null;
    const prevPage = pageNumber > 1 ? pageNumber - 1 : null;

    res.status(200).json({
      message: "Employees retrieved successfully",
      currentPage: pageNumber,
      totalPages,
      totalEmployees,
      nextPage,
      prevPage,
      data: employees,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Get [Employees by ID]:

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

//Delete Employees:

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

//Find Employees by ID:
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

//Find deleted Employees
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

//Get All Employees.
exports.getAllEmployees = async (req, res) => {
  const SchemaModel = getSchemaModel();
  try {
    const employee = await SchemaModel.Employee.findAll();
    return res.status(OK).json({ message: "Found", employee });
  } catch (err) {
    res.status(NOT_FOUND).json({ message: USER_NOT_FOUND });
  }
};
