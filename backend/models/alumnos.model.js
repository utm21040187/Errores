//COMO Y EL DONDE SE GUARDAN LOS DATOS
import{Schema, model} from "mongoose";

const alumnos = new Schema({
    name:{
        type:String
    },
    Edad:{
        type:Number
    }
})
export const modelo = new model("Tabla de alumnos", alumnos)