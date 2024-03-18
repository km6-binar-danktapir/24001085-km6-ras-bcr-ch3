const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars-controller.js");

router.route("/").get(carsController.getAllCars).post(carsController.addCar);
router
    .route("/:id")
    .get(carsController.getCarById)
    .patch(carsController.updateCarById)
    .delete(carsController.deleteCarById);

module.exports = router;
