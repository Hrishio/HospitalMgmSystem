const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmpById,
  getEmpById,
  getDeletedEmp,
  filterEmployees,
} = require("../controllers/empController.js");
const { filterEmps } = require("../services/userService.js");
const {
  paginationMiddleware,
  searchMiddleware,
  sortMiddleware,
} = require("../middlewares/index.js");

const {
  SERVER_ERROR,
  CREATED,
  OK,
  NOT_FOUND,
} = require("../constants/statusCodes.js");
const {
  CREATE_USER_ERROR,
  GET_USER_ERROR,
  UPDATE_USER_ERROR,
  DELETE_USER_ERROR,
  USER_NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../constants/errorMessages.js");

const router = express.Router();

// Get all Employees
router.get("/", getAllEmployees);

// Filtering, Pagination, Search, and Sorting
router.get(
  "/filter",
  paginationMiddleware,
  searchMiddleware,
  sortMiddleware,
  filterEmployees
);
// async (req, res) => {
//   try {
//     const { where = "{}", limit = 10, offset = 0, order = "[]" } = req.query;
//     const filters = JSON.parse(where); // Convert query string to JSON object
//     const paginationLimit = parseInt(limit, 10);
//     const paginationOffset = parseInt(offset, 10);
//     const ordering = JSON.parse(order);
//     // Convert JSON string to array
//     // const filterConditions =
//     //   filters && typeof filters === "object" ? filters : {};

//     const employees = await filterEmps({
//       where: filters,
//       limit: paginationLimit,
//       offset: paginationOffset,
//       order: ordering,
//     });
// Create Employee
router.post("/new", createEmployee);

// Find Deleted Employees
router.get("/deleted", getDeletedEmp);

// Get, Update, and Delete a specific Employee by ID
router
  .get("/:empId", getEmpById)
  .put("/:empId", updateEmployee)
  .delete("/:empId", deleteEmpById);

module.exports = router;
