import { modelo } from "../models/alumnos.model";

modelo.create({
    Name:"Rodolfo",
    edad:25
})

export const test1 = ()=>{
    console.log("Funciona el controlador")
}