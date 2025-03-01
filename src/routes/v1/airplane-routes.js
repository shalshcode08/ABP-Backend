const express = require("express");
const {AirplaneController} = require("../../controllers")
const {AirplaneMiddleware} = require("../../middleware");

const router = express.Router();

// -> /api/v1/airplane * POST, GET, PUT, DELETE
router.post("/", AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);
router.get("/", AirplaneController.getAirplanes);
router.get("/:id", AirplaneController.getAirplaneById);
router.delete("/:id", AirplaneController.deleteAirplaneById);
router.put("/:id", AirplaneController.updateAirplaneById);

module.exports = router;