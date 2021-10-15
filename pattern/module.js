//Sin módulos sería OLD VERSION
const modulo = (
    function () {
        const data = "datos";
        const opendata = "accesibe como propiedad";        
        function metodo() {
            console.log("Old Module")
            console.log(data);
        }
        return {
            data,
            metodo, 
            opendata
        }
    }
)();

//Importando <script src="...module.js"></script> en un archivo externo podemos
console.log(modulo);
console.log(modulo.opendata);
//Module Pattern Pattern
const accionModulo = data => {
    console.log(data);
}

//Con esto podemos importar en otro archivo y hacer modulos específicos
// export default {accionModulo} ;

//Testing Modules
console.log(solid);



