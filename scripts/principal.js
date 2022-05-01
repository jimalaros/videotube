import { datos } from '../data/data.js'
import { mostrarData } from '../modules/mostrar.js';

let saludo = document.getElementById("saludo");
const videos = document.getElementById('videos')
let nombre = localStorage.getItem("nombre");
const boton = document.getElementById('busqueda');

saludo.textContent = `Hola ${nombre}, te damos la bienvenida`

mostrarData(videos, datos);

boton.addEventListener("click", function (e) {
    e.preventDefault()
    const categoriaVideo = document.getElementById("buscador").value;
    localStorage.setItem("categoria", categoriaVideo);
    window.location.href = '../pages/filtro.html';
})

document.addEventListener('dblclick', ({ target }) => {

    if (target.classList.contains('cardVideo')) {
        Swal.fire(
            'Felicidades!',
            'Video encontrado',
            'success'
        )
        
        let idVideo = target.id;
        let video = datos.find(item => item.id == idVideo);

        localStorage.setItem('elementoSeleccionado', JSON.stringify(video));
        
        window.location.href = '../pages/detallesVideo.html';

    } else {
        Swal.fire(
            'Oops!',
            'No hay videos en esta sección',
            'warning'
        ) 
    }

});