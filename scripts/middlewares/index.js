const { Op } = require("sequelize");

//Pagination Middleware.
const paginationMiddleware = (req, res, next) => {
  const { limit = 1, offset = 0 } = req.query;

  req.pagination = { limit: parseInt(limit, 1), offset: parseInt(offset, 0) };
  next();
};

//Searching Middleware.
const searchMiddleware = (req, res, next) => {
  const { search = "" } = req.query;

  req.search = search.trim();
  next();
};

//Sorting Middleware
const sortMiddleware = (req, res, next) => {
  const { sortBy = "createdAt", sortOrder = "ASC" } = req.query;

  req.sort = {
    sortBy,
    sortOrder: sortOrder.toUpperCase(),
  };
  next();
};

module.exports = {
  paginationMiddleware,
  searchMiddleware,
  sortMiddleware,
};
