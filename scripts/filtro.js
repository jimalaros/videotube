import { datos } from "../data/data.js";
import { mostrarData } from "../modules/mostrar.js";

const welcomeSection = document.getElementById('saludo');
const nombre = localStorage.getItem("nombre");
const categoria = localStorage.getItem("categoria");

welcomeSection.textContent = `Hola ${nombre}, estos son tus videos`;

const videos = document.getElementById('videos');
const opción = datos.filter(video => video.categoria == categoria)

mostrarData(videos, opción)
