const carsRepo = require("../repository/cars-repository.js");

function getAllCars() {
    return carsRepo.getAllCars();
}

function getCarById(id) {
    return carsRepo.getCarById(id);
}

module.exports = { getAllCars, getCarById };
