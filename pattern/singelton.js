
//Singelton
var instancia = null;

class Single {
    constructor(data001, data002) {
        if (!instancia) {
            this.data001 = data001;
            this.data002 = data002;
            instancia = this;
        } else {
            return instancia;
        }


    };
}

const single = new Single("Instancia i1", "Se puede instanciar");
const single1 = new Single("Instancia i2", "NO ES ACCESIBLE");


console.log(single);
console.log(single1);

