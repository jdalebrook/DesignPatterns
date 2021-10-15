class Viviendas {
    constructor(numero, metros) {
        this.numero = numero;
        this.metros = metros;
    };
}

//funciones que añadiremos que
const funcionesVivienda = {
    alquilar(){
        console.log("Vivienda alquilada")
    },
    vender(){
        console.log("Vivienda vendida")
    },
}

//Object.assign
Object.assign(Viviendas.prototype, funcionesVivienda)
const vivienda = new Viviendas("Piso", "54m");
vivienda.alquilar();
vivienda.vender();