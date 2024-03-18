import Component from "./Component.js";

export default class Car extends Component {
    constructor({
        id,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        available,
        type,
        year,
        options,
        specs,
        availableAt,
    }) {
        super(id);
        this.plate = plate;
        this.manufacture = manufacture;
        this.model = model;
        this.image = image;
        this.rentPerDay = rentPerDay;
        this.capacity = capacity;
        this.description = description;
        this.transmission = transmission;
        this.available = available;
        this.type = type;
        this.year = year;
        this.options = options;
        this.specs = specs;
        this.availableAt = new Date(availableAt);
    }

    static records = [];

    static init = (cars) => (this.records = cars.map((car) => new this(car)));

    hasOption(option) {
        return this.options.find((opt) => opt === option);
    }

    // render html here
    render() {
        return `
                <div class="col-md-4">
                    <div class="card car-card">
                        <img
                            class="img-fluid card-img-top car-image"
                            src="${this.image}"
                        />
                        <div class="card-body">
                            <h5 class="card-title mb-1">
                                ${this.model} / ${this.type}
                            </h5>
                            <p class="car-price">
                                Rp. ${this.rentPerDay} / hari
                            </p>
                            <p class="car-description">${this.description}</p>
                            <ul class="list-car-features">
                                <li class="mb-3">
                                    <img
                                        class="img-fluid"
                                        src="../images/fi_users.png"
                                    />
                                    <p class="car-features">
                                        ${this.capacity} orang
                                    </p>
                                </li>
                                <li class="mb-3">
                                    <img
                                        class="img-fluid"
                                        src="../images/fi_settings.png"
                                    />
                                    <p class="car-features">
                                        ${this.transmission}
                                    </p>
                                </li>
                                <li class="mb-3">
                                    <img
                                        class="img-fluid"
                                        src="../images/fi_calendar.png"
                                    />
                                    <p class="car-features">
                                        Tahun ${this.year}
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
}
