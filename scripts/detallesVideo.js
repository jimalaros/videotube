//import { datos } from "../data/data.js";
//import { mostrarData } from "../modules/mostrar.js";

import { mostrarInfo } from "../modules/mostrarDetalle.js";

const seccion = document.getElementById("area")
const elemento = JSON.parse(localStorage.getItem("elementoSeleccionado"));

mostrarInfo(seccion, elemento);
