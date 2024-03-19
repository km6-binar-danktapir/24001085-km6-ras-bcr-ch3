import { getTimeStamp } from "../../utils/cars-utils.js";

const cariMobilBtn = document.getElementById("cari-mobil-btn");

async function getCars() {
    const response = await fetch("/cars");
    return response.json();
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
    return response.json();
}

cariMobilBtn.addEventListener("click", async (event) => {
    const displayedCarsSection = document.getElementById(
        "displayed-cars-section"
    );
    const filteredCars = await getFilteredCars();

    event.preventDefault();

    if (filteredCars.length !== 0) {
        // if there are cars with corresponding filters, then do:
        displayedCarsSection.innerHTML = `<div class="row g-4" id="displayed-cars"></div>`;

        const carsContainer = document.getElementById("displayed-cars");

        filteredCars.forEach((car) => {
            carsContainer.innerHTML += car.render();
        });
    } else {
        displayedCarsSection.innerHTML = "";
    }
});

await getCars();