/**********************************************************
| # SVOLGIMENTO
**********************************************************/

// CLASS Car
class Car extends Vehicle {
    doors;
    fuelType;

    constructor (brand, year, color, doors, fuelType) {
        
        // INHERITED PARAMETERS (PARENT CLASS)
        super(brand, year, color);

        // UNIQUE PARAMETERS
        this.doors = doors;
        this.fuelType = fuelType;
    }

    carInfo () {
        return this.carInfo = `Doors: ${this.doors}, Fuel type: ${this.fuelType}`;
    }

    // SPECIFIC FUNCTION (stesso nome della funzione della PARENT CLASS)
    accelerate () {
        console.log('Swooooosh!');
    }
}



// INSTANCE of Vehicle: Opel, 2020, black, 4 doors, gasoline
const opelNera = new Car ('Opel', 2020, 'black', 4, 'gasoline');
console.log('INFO Opel:');
console.log(opelNera);
console.log(opelNera.vehicleInfo() + ', ' + opelNera.carInfo());
console.log(opelNera.accelerate());



