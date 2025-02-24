const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { BadRequestError, NotFoundError, InternalServerError } = require("../utils/errors/app-error");

async function createAirplane(req, res, next) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    next(new InternalServerError(error.message));
  }
}

async function getAirplanes(req, res, next) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    next(new InternalServerError(error.message));
  }
}

async function getAirplaneById(req, res, next) {
  try {
    const airplane = await AirplaneService.getAirplaneById(req.params.id);
    if (!airplane) {
      throw new NotFoundError("Airplane not found");
    }
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    next(error);
  }
}

async function deleteAirplaneById(req, res, next) {
  try {
    const response = await AirplaneService.destroyAirplane(req.params.id);
    if (!response) {
      throw new BadRequestError("Airplane not found");
    }
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    next(error);
  }
}

async function updateAirplaneById(req, res, next) {
  try {
    const response = await AirplaneService.updateAirplane(req.params.id, {
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    if (!response) {
      throw new BadRequestError("Airplane not found");
    }
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    next(error);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplaneById,
  deleteAirplaneById,
  updateAirplaneById,
};
