const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const {ErrorResponse, SuccessResponse} = require("../utils/common")

/**
 *  POST : /airplanes
 * req-body {modelNumber : "airbus320", capacity : 100}
 */

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane; 
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
};
