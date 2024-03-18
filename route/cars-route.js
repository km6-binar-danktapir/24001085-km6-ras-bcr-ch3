const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars-controller.js");

router.get("/", carsController.getAllCars);
router.get("/:id", carsController.getCarById);
router.post("/", carsController.addCar);
router.patch("/:id", carsController.updateCarById);
router.delete("/:id", carsController.deleteCarById);

module.exports = router;
