const carsRepo = require("../repository/cars-repository.js");

function getAllCars() {
    return carsRepo.getAllCars();
}

function getCarById(id) {
    return carsRepo.getCarById(id);
}

function addCar(payload) {
    return carsRepo.addCar(payload);
}

module.exports = { getAllCars, getCarById, addCar };
