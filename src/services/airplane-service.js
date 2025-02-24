const { AirplaneRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new Error(
      "Cannot fetch data of all airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplaneById(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if(error.statusCode === StatusCodes.NOT_FOUND){
        throw new Error("Airplane requested is not found");
    }
    throw new Error(
      "Cannot fetch the data of the airplane",
      StatusCodes.NOT_FOUND
    );
  }
}

async function destroyAirplane(id){
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        StatusCodes.INTERNAL_SERVER_ERROR,
        console.log("Err" , error);
    }
}

async function updateAirplane(id, data){
  try {
    const response = await airplaneRepository.update(id, data);
    return response;
  } catch (error) {
    StatusCodes.BAD_REQUEST;
    console.log("error", error);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplaneById,
  destroyAirplane,
  updateAirplane,
};
