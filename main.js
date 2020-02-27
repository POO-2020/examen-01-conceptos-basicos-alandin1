import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js"

class Main {
    constructor(){
        this.cantidad1 = new Cantidad(500, "gramos")
        this.cantidad2 = new Cantidad(300, "gramos")
        this.ingrediente = new Ingrediente(this.cantidad1, "frijoles", 23)
        this.ingrediente2 = new Ingrediente(this.cantidad2, "bolillo", 6)
        this.receta = new Receta("Torta de frijoles", "María López")
    }

    pruebaCantidad(){
        let cantidad = new Cantidad(500, "gramos")
        console.log(cantidad.getDescripcion())
    }

    pruebaIngrediente(){
        let ingrediente1 = new Ingrediente(new Cantidad(500, "gramos"), "de frijoles", 23)
        let ingrediente2 = new Ingrediente(new Cantidad(300, "gramos"), "bolillo", 6)
        console.log(ingrediente1.getDescripcion())
        console.log(ingrediente2.getDescripcion())
    }

    pruebaReceta(){
        this.receta = new Receta("Torta de frijoles.", "María López.")
        this.receta.agregarIngrediente(this.ingrediente)
        this.receta.agregarIngrediente(this.ingrediente2)
        this.receta.imprimirEnConsola()
    }
}

let app = new Main

app.pruebaCantidad()
app.pruebaIngrediente()
app.pruebaReceta()