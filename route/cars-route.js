const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars-controller.js");

router.get("/", carsController.getAllCars);

module.exports = router;
