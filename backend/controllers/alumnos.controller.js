import { modelo } from "../models/alumnos.model.js";

modelo.create({
    name:"Rodolfo",
    Edad:25
})

export const test = ()=>{
    console.log("Funciona el controlador")
}
