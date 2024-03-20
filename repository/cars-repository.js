const { v4: uuidv4 } = require("uuid");
const cars = require("../data/cars.json");

function getAllCars() {
    return cars;
}

function getFilteredCars(params) {
    const { driverType, pickUpTimestamp, passengersCapacity } = params;

    const filteredCars = cars.filter((car) => {
        // convert from ISO string format to date object
        const pickUpDate = new Date(pickUpTimestamp);
        const carAvailableDate = new Date(car.availableAt);

        if (
            car.options.includes(driverType) &&
            pickUpDate > carAvailableDate
        ) {
            if (passengersCapacity) {
                const parsedPassengersCapacity = parseInt(passengersCapacity);
                return car.capacity > parsedPassengersCapacity;
            }
            return true;
        }
        return false;
    });
    return filteredCars;
}

function getFirstCar() {
    return cars[0];
}

function getCarById(id) {
    return cars.find((car) => car.id === id);
}

function getCarIndexById(id) {
    return cars.findIndex((car) => car.id === id);
}

function addCar(payload) {
    const car = {
        id: uuidv4(),
        ...payload,
    };
    cars.push(car);
    return cars[cars.length - 1];
}

function deleteCarByIndex(idx) {
    const deletedCar = cars[idx];
    cars.splice(idx, 1);
    return deletedCar;
}

module.exports = {
    getAllCars,
    getCarById,
    addCar,
    getCarIndexById,
    deleteCarByIndex,
    getFilteredCars,
    getFirstCar,
};
