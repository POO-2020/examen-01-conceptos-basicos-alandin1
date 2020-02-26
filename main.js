import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"

class Main {
    constructor(){

    }

    pruebaCantidad(){
        let cantidad = new Cantidad(120, "gramos")
        console.log(cantidad.getDescripcion())
    }

    pruebaIngrediente(){
        let ingrediente = new Ingrediente(new Cantidad(10, "gramos"), "de harina", 13)
        console.log(ingrediente.getDescripcion())
    }

}

let app = new Main

app.pruebaCantidad()
app.pruebaIngrediente()