const carsService = require("../service/cars-service.js");

function getCars(req, res) {
    const params = req.query;

    if (Object.keys(params).length === 0) {
        return res.status(200).json({
            data: carsService.getAllCars(),
            message: null,
        });
    }

    if (!params.driverType || !params.pickUpTimestamp) {
        return res.status(400).json({
            data: null,
            message:
                "Driver type and pick up timestamp fields must not be empty!",
        });
    }

    return res.status(200).json({
        data: carsService.getFilteredCars(params),
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

function updateCarById(req, res) {
    const payload = req.body;
    /**
     * cek kalo ada atribut di payload yg value-nya
     * null / no-value / empty array (kalo array)
     */
    for (let attr in payload) {
        if (
            !payload[attr] ||
            (payload[attr] instanceof Array && payload[attr].length === 0)
        ) {
            const capitalizedAttrName =
                attr.charAt(0).toUpperCase() + attr.slice(1);

            return res.status(400).json({
                data: null,
                message: `${capitalizedAttrName} field must not be empty!`,
            });
        }
    }
    const carId = req.params.id;
    const car = carsService.updateCarById(carId, payload);

    return res.status(car ? 200 : 400).json({
        data: car ? car : null,
        message: car ? null : `Car with ID ${id} does not exist!`,
    });
}

function deleteCarById(req, res) {
    const carId = req.params.id;
    const car = carsService.deleteCarById(carId);

    return res.status(car ? 200 : 404).json({
        data: car ? car : null,
        message: car ? null : `Car with ID ${id} does not exist!`,
    });
}

module.exports = {
    getCars,
    getCarById,
    addCar,
    updateCarById,
    deleteCarById,
};
