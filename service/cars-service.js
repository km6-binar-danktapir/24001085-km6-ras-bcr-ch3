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

function updateCarById(id, payload) {
    const car = carsRepo.getCarById(id);

    for (let attr in payload) {
        car[attr] = payload[attr];
    }

    return car;
}

module.exports = { getAllCars, getCarById, addCar, updateCarById };
