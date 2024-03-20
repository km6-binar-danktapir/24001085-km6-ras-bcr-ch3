import { getTimeStamp } from "./utils.js";

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
    const driverType = document.getElementById("pilih-driver").value;
    const selectedDate = document.getElementById("date-picker").value;
    const selectedPickUpTime = document.getElementById("waktu-jemput").value;
    const passengersCapacity =
        document.getElementById("jumlah-penumpang").value;
    const pickUpTimeStamp = getTimeStamp(selectedDate, selectedPickUpTime);

    const response = await fetch(
        `/cars?driverType=${driverType}&pickUpTimestamp=${pickUpTimeStamp}&passengerCapacity=${passengersCapacity}`
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

function renderCar(car) {
    return `
                <div class="col-md-4">
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

cariMobilBtn.addEventListener("click", async (event) => {
    const filteredCars = await getFilteredCars();
    const carsContainer = document.getElementById("displayed-cars");

    event.preventDefault();

    if (filteredCars.length !== 0) {
        // if there are cars with corresponding filters, then do:
        displayedCarsSection.innerHTML = `<div class="row g-4" id="displayed-cars"></div>`;

        filteredCars.forEach((car) => {
            carsContainer.innerHTML += renderCar(car);
        });
    } else {
        displayedCarsSection.innerHTML = "";
    }
});

displayAllCars();
