//Evitar choque variables locales creando un objeto global y agregar todas las funciones dentro

const app = {};
//aquí colocaremos todo

app.evitandochoque = [
    {datos : "datos dentro del namespace 1", precio: 20},
    {datos : "datos dentro del namespace 2", precio: 30},
    {datos : "datos dentro del namespace 3", precio: 40},
]

app.metodos = {
    metodoAutolanzado: (()=>{console.log("Metodo autoinstanciado")})(),      
    metodo2: ()=>{console.log("Metodo Instanciado")}
}

console.log(app)
app.metodos.metodo;
app.metodos.metodo2();