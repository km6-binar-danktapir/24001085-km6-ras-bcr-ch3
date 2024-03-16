const carsRepo = require("../repository/cars-repository.js");

function getAllCars() {
    return carsRepo.getAllCars();
}

module.exports = { getAllCars };
