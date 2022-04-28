import { datos } from '../data/data.js'
import { mostrarData } from '../modules/mostrar.js';

let saludo = document.getElementById("saludo");
const videos = document.getElementById('videos')
let nombre = localStorage.getItem("nombre");

saludo.textContent = `Hola ${nombre}, te damos la bienvenida`

mostrarData(videos, datos);