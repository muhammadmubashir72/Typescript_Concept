abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = false;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.isRented()) {
        console.log(`${this.getMake()} ${this.getModel()} ${this.getYear()} is already rented.`);
      } else {
        this.setRented(true);
        console.log(`${this.getMake()} ${this.getModel()} ${this.getYear()} is now rented.`);
      }
    }
  
    return(): void {
      if (this.isRented()) {
        this.setRented(false);
        console.log(`${this.getMake()} ${this.getModel()} ${this.getYear()} has been returned.`);
      } else {
        console.log(`${this.getMake()} ${this.getModel()} ${this.getYear()} is not rented.`);
      }
    }
  }
  
  class Car extends Vehicle {
    private numDoors: number;
    private numSeats: number;
  
    constructor(make: string, model: string, year: number, numDoors: number, numSeats: number) {
      super(make, model, year);
      this.numDoors = numDoors;
      this.numSeats = numSeats;
    }
  
    rentalRate(): number {
      return 50; // $50 per day for a car
    }
  
    getNumDoors(): number {
      return this.numDoors;
    }
  
    getNumSeats(): number {
      return this.numSeats;
    }
  }
  
  class Truck extends Vehicle {
    private payloadCapacity: number;
  
    constructor(make: string, model: string, year: number, payloadCapacity: number) {
      super(make, model, year);
      this.payloadCapacity = payloadCapacity;
    }
  
    rentalRate(): number {
      return 75; // $75 per day for a truck
    }
  
    getPayloadCapacity(): number {
      return this.payloadCapacity;
    }
  }
  
  class Motorcycle extends Vehicle {
    private engineDisplacement: number;
  
    constructor(make: string, model: string, year: number, engineDisplacement: number) {
      super(make, model, year);
      this.engineDisplacement = engineDisplacement;
    }
  
    rentalRate(): number {
      return 25; // $25 per day for a motorcycle
    }
  
    getEngineDisplacement(): number {
      return this.engineDisplacement;
    }
  }
  
  // Example usage:
  
  const car = new Car('Toyota', 'Camry', 2020, 4, 5);
  car.rent(); // outputs: "Toyota Camry 2020 is now rented."
  car.rent(); // outputs: "Toyota Camry 2020 is already rented."
  car.return(); // outputs: "Toyota Camry 2020 has been returned."
  console.log(car.rentalRate()); // outputs: 50
  
  const truck = new Truck('Ford', 'F-150', 2018, 2000);
  console.log(truck.getPayloadCapacity()); // outputs: 2000
  console.log(truck.rent);