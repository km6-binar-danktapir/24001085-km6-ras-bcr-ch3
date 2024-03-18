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

    if (!car) {
        return null;
    }

    for (let attr in payload) {
        car[attr] = payload[attr];
    }

    return car;
}

function deleteCarById(id) {
    const carIdx = carsRepo.getCarIndexById(id);

    if (carIdx === -1) {
        return null;
    }
    return carsRepo.deleteCarByIndex(carIdx);
}

module.exports = {
    getAllCars,
    getCarById,
    addCar,
    updateCarById,
    deleteCarById,
};
