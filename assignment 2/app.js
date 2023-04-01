var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.isRented = function () {
        return this.rented;
    };
    Vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    Vehicle.prototype.rent = function () {
        if (this.isRented()) {
            console.log("".concat(this.getMake(), " ").concat(this.getModel(), " ").concat(this.getYear(), " is already rented."));
        }
        else {
            this.setRented(true);
            console.log("".concat(this.getMake(), " ").concat(this.getModel(), " ").concat(this.getYear(), " is now rented."));
        }
    };
    Vehicle.prototype.return = function () {
        if (this.isRented()) {
            this.setRented(false);
            console.log("".concat(this.getMake(), " ").concat(this.getModel(), " ").concat(this.getYear(), " has been returned."));
        }
        else {
            console.log("".concat(this.getMake(), " ").concat(this.getModel(), " ").concat(this.getYear(), " is not rented."));
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, numDoors, numSeats) {
        var _this = _super.call(this, make, model, year) || this;
        _this.numDoors = numDoors;
        _this.numSeats = numSeats;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 50; // $50 per day for a car
    };
    Car.prototype.getNumDoors = function () {
        return this.numDoors;
    };
    Car.prototype.getNumSeats = function () {
        return this.numSeats;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, payloadCapacity) {
        var _this = _super.call(this, make, model, year) || this;
        _this.payloadCapacity = payloadCapacity;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        return 75; // $75 per day for a truck
    };
    Truck.prototype.getPayloadCapacity = function () {
        return this.payloadCapacity;
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, engineDisplacement) {
        var _this = _super.call(this, make, model, year) || this;
        _this.engineDisplacement = engineDisplacement;
        return _this;
    }
    Motorcycle.prototype.rentalRate = function () {
        return 25; // $25 per day for a motorcycle
    };
    Motorcycle.prototype.getEngineDisplacement = function () {
        return this.engineDisplacement;
    };
    return Motorcycle;
}(Vehicle));
// Example usage:
var car = new Car('Toyota', 'Camry', 2020, 4, 5);
car.rent(); // outputs: "Toyota Camry 2020 is now rented."
car.rent(); // outputs: "Toyota Camry 2020 is already rented."
car.return(); // outputs: "Toyota Camry 2020 has been returned."
console.log(car.rentalRate()); // outputs: 50
var truck = new Truck('Ford', 'F-150', 2018, 2000);
console.log(truck.getPayloadCapacity()); // outputs: 2000
console.log(truck.rent);
