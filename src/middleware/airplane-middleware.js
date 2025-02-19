const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require("../utils/common");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong while creating Airplane";
    ErrorResponse.error = {
      explanation : "Model number not found in the incomming request in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
    validateCreateRequest
}