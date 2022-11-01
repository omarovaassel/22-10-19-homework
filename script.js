class Car {
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
    engineStart() {
        console.log(`${this.color} ${this.model} ${this.year} engine started`);
    }
    engineStop() {
        console.log(`${this.color} ${this.model} ${this.year} engine stop`);
    }
}

let mercedes = new Car("Mercedes", "Red", 2014);
let audi = new Car("Audi", "Black", 2022);

mercedes.engineStart();
mercedes.engineStop();

audi.engineStart();
audi.engineStop();