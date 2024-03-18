export default class Component {
    constructor(id) {
        // throw error kalo nyoba buat instance dari class ini
        if (new.target === this) {
            throw new Error("Cannot instantiate from Component class");
        }
        this.id = id;
    }

    // abstract method to be implemented by subclass
    render() {
        throw new Error("Cannot invoke this method from Component class");
    }
}
