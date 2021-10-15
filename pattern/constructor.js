

//Class Pattern

class Vivienda {
    constructor(numero, metros) {
        this.numero = numero;
        this.metros = metros;
    };
}


//Constructor Pattern

class Estudio extends Vivienda {
    constructor(numero, metros, habitaciones) {
        super(numero, metros)
        this.habitaciones = habitaciones;
    };
}

const casa = new Vivienda("Casa", "150");
const  estudio = new Estudio("Loft", "30", "0");

console.log(casa);
console.log(estudio);

