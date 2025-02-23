const express = require("express");
const {AirplaneController} = require("../../controllers")
const {AirplaneMiddleware} = require("../../middleware");

const router = express.Router();

// -> /api/v1/airplane *POST
router.post("/", AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);
router.get("/", AirplaneController.getAirplanes);

module.exports = router;