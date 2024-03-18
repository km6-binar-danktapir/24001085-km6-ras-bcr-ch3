const { v4: uuidv4 } = require("uuid");
const cars = require("../data/cars.json");

function getAllCars() {
    return cars;
}

function getCarById(id) {
    return cars.find((car) => car.id === id);
}

function addCar(payload) {
    const car = {
        id: uuidv4(),
        ...payload,
    };
    cars.push(car);
    return cars[cars.length - 1];
}

module.exports = { getAllCars, getCarById, addCar };
