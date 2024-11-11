// INSTANCE of Vehicle: Fiat 2019 blu
const fiatBlu = new Vehicle ('Fiat', 2019, 'blue');
console.log('INFO Fiat:');
console.log(fiatBlu);
console.log(fiatBlu.vehicleInfo());
console.log(fiatBlu.accelerate());

// INSTANCE of Vehicle: Opel, 2020, black, 4 doors, gasoline
const opelNera = new Car ('Opel', 2020, 'black', 4, 'gasoline');
console.log('INFO Opel:');
console.log(opelNera);
console.log(opelNera.vehicleInfo() + ', ' + opelNera.carInfo());
console.log(opelNera.accelerate());