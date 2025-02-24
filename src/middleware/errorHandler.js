const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils/errors");

function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    ErrorResponse.message = err.message;
    ErrorResponse.error = {
      explanation: err.message,
    };
    return res.status(err.statusCode).json(ErrorResponse);
  }

  ErrorResponse.message = "An error occurred";
  ErrorResponse.error = {
    explanation: err.message || "Internal Server Error",
  };
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
}

module.exports = errorHandler;