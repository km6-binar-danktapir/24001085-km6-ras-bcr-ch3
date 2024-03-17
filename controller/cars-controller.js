const carsService = require("../service/cars-service.js");

function getAllCars(_, res) {
    return res.status(200).json({
        data: carsService.getAllCars(),
        message: null,
    });
}

function getCarById(req, res) {
    const carId = req.params.id;
    const car = carsService.getCarById(carId);

    return res.status(car ? 200 : 404).json({
        data: car ? car : null,
        message: car ? null : `Car with ID ${carId} does not exist!`,
    });
}

function addCar(req, res) {
    const payload = req.body;
    const car = carsService.addCar(payload);

    return res.status(201).json({
        data: car,
        message: null,
    });
}

module.exports = { getAllCars, getCarById, addCar };
