import { getTimeStamp } from "./utils.js";

const driverTypeField = document.getElementById("pilih-driver");
const dateField = document.getElementById("date-picker");
const pickUpTimeField = document.getElementById("waktu-jemput");
const cariMobilBtn = document.getElementById("cari-mobil-btn");
const displayedCarsSection = document.getElementById("displayed-cars-section");

async function getCars() {
    const response = await fetch("/cars");
    const { data } = await response.json();
    return data;
}

async function getFilteredCars() {
    /**
     * filter berdasarkan input fields
     */
    const driverType = driverTypeField.value;
    const selectedDate = dateField.value;
    const selectedPickUpTime = pickUpTimeField.value;
    const passengersCapacity =
        document.getElementById("jumlah-penumpang").value;
    const pickUpTimeStamp = getTimeStamp(selectedDate, selectedPickUpTime);

    console.log(driverType);

    const response = await fetch(
        `/cars?driverType=${driverType}&pickUpTimestamp=${pickUpTimeStamp.toISOString()}&passengerCapacity=${passengersCapacity}`
    );
    const { data } = await response.json();
    return data;
}

async function displayAllCars() {
    displayedCarsSection.innerHTML = `<div class="row g-4" id="displayed-cars"></div>`;

    const cars = await getCars();
    const carsContainer = document.getElementById("displayed-cars");

    cars.forEach((car) => {
        carsContainer.innerHTML += renderCar(car);
    });
}

async function displayFilteredCars() {
    const filteredCars = await getFilteredCars();

    if (filteredCars.length !== 0) {
        displayedCarsSection.innerHTML = `<div class="row g-4" id="displayed-cars"></div>`;

        const carsContainer = document.getElementById("displayed-cars");

        filteredCars.forEach((car) => {
            carsContainer.innerHTML += renderCar(car);
        });
    } else {
        displayedCarsSection.innerHTML = "";
    }
}

function renderCar(car) {
    return `
                <div class="col-lg-3">
                    <div class="card car-card">
                        <img
                            class="img-fluid card-img-top car-image"
                            src="${car.image}"
                        />
                        <div class="card-body">
                            <h5 class="card-title mb-1">
                                ${car.model} / ${car.type}
                            </h5>
                            <p class="car-price">
                                Rp. ${car.rentPerDay} / hari
                            </p>
                            <p class="car-description">${car.description}</p>
                            <ul class="list-car-features">
                                <li class="mb-3">
                                    <img
                                        class="img-fluid"
                                        src="../images/fi_users.png"
                                    />
                                    <p class="car-features">
                                        ${car.capacity} orang
                                    </p>
                                </li>
                                <li class="mb-3">
                                    <img
                                        class="img-fluid"
                                        src="../images/fi_settings.png"
                                    />
                                    <p class="car-features">
                                        ${car.transmission}
                                    </p>
                                </li>
                                <li class="mb-3">
                                    <img
                                        class="img-fluid"
                                        src="../images/fi_calendar.png"
                                    />
                                    <p class="car-features">
                                        Tahun ${car.year}
                                    </p>
                                </li>
                            </ul>
                            <button
                                type="button"
                                class="btn btn-outline-success w-100"
                            >
                                Pilih Mobil
                            </button>
                        </div>
                    </div>
                </div>
        `;
}

/**
 * toggle button's behavior when required fields are empty
 */
function toggleCariMobilBtn() {
    if (!driverTypeField.value || !dateField.value || !pickUpTimeField.value) {
        cariMobilBtn.disabled = true;
    } else {
        cariMobilBtn.disabled = false;
    }
}

document.addEventListener("DOMContentLoaded", toggleCariMobilBtn);

driverTypeField.addEventListener("change", toggleCariMobilBtn);
dateField.addEventListener("input", toggleCariMobilBtn);
pickUpTimeField.addEventListener("change", toggleCariMobilBtn);

cariMobilBtn.addEventListener("click", async (event) => {
    await displayFilteredCars();

    event.preventDefault();
});

displayAllCars();
