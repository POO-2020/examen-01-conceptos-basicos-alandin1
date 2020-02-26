import Ingrediente from "./ingrediente.js"

export default class Receta {
    /**
     * 
     * @param {string} nombre 
     * @param {string} autor 
     * @param {Ingrediente[]} ingredientes 
     */
    constructor(nombre, autor, ingredientes){
        this.nombre = nombre
        this.autor = autor
        this.ingredientes = ingredientes
    }
    
}