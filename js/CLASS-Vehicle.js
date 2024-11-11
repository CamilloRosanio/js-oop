/**********************************************************
| # CONSEGNA
**********************************************************/

/*
esercizio di oggi: Primi passi con la OOP
nome repo: js-oop
L'esercitazione di oggi è facoltativa, però bisogna comunque aprire una repo (anche vuota) col nome dato per il corretto conteggio degli esercizi.
In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi. La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
marca
anno
colore

Successivamente:
Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()

BONUS
In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
Successivamente:
Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
Stampiamo il numero di porte e il tipo di carburante.
*/



/**********************************************************
| # SVOLGIMENTO
**********************************************************/

// CLASS Vehicle
class Vehicle {
    brand;
    year;
    color;

    constructor (brand, year, color) {
        this.brand = brand;
        this.year = year;
        this.color = color;
    }

    getAge () {
        return Number(new Date().getFullYear()) - Number(this.year);
    }

    vehicleInfo () {
        return this.vehicleInfo = `Vehicle info || Brand: ${this.brand}, Year: ${this.year}, Color: ${this.color}, Age (years): ${this.getAge()}`;
    }

    accelerate () {
        console.log('Vrooom!');
    }
}



// INSTANCE of Vehicle: Fiat 2019 blu
// const fiatBlu = new Vehicle ('Fiat', 2019, 'blue');
// console.log('INFO Fiat:');
// console.log(fiatBlu);
// console.log(fiatBlu.vehicleInfo());
// console.log(fiatBlu.accelerate());


