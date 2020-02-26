import Cantidad from "./cantidad.js"

export default class Ingrediente{
    /**
     * 
     * @param {Cantidad} cantidad 
     * @param {string} nombre del producto
     * @param {number} costo del producto
     */
    constructor(cantidad, nombre, costo){
        this.cantidad = cantidad
        this.nombre = nombre
        this.costo = costo
    }
    
    getDescripcion(){
        return (`${this.cantidad.getDescripcion()} de ${this.nombre} $${this.costo}`)
    }
}