const cars = require("../data/cars.json");

function getAllCars() {
    return cars;
}

function getCarById(id) {
    return cars.find((car) => car.id === id);
}

function addCar(car) {
    cars.push(car);
    return cars[cars.length - 1];
}

function updateCar(carIdx, updatedCar) {
    cars[carIdx] = updateCar;
    return updateCar;
}

module.exports = { getAllCars, getCarById, addCar, updateCar };
