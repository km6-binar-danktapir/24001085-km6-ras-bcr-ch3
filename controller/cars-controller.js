const carsService = require("../service/cars-service.js");

function getAllCars(_, res) {
    return res.status(200).json({
        data: carsService.getAllCars(),
        message: null,
    });
}

module.exports = { getAllCars };
