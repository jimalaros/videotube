import { datos } from "../data/data.js";

export function Crear() {

    const url = document.getElementById("urlVideo").value;
    console.log(url);
    const img = document.getElementById("imagenVideo").value;
    console.log(img);
    const name = document.getElementById("nombreCancion").value;
    console.log(name);
    const categoria = document.getElementById("categoriaVideo").value;
    console.log(categoria);
    const cantante = document.getElementById("cantanteVideo").value;
    console.log(cantante);

    const id = datos.length + 1;
    
    const nuevoVideo = {id, url, img, name, categoria, cantante};
    datos.push(nuevoVideo)
}