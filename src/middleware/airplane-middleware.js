const { StatusCodes } = require("http-status-codes");
const {ErrorResponse, SuccessResponse} = require("../utils/common");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Something went wrong while creating Airplane",
      data: {},
      error: {
        explanation : "Model number not found in the incomming request in the correct form",
      },
    });
  }
  next();
}

module.exports = {
    validateCreateRequest
}