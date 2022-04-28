const boton = document.getElementById('busqueda');

boton.addEventListener("submit", function (e) {
    e.preventDefault()
    const categoriaVideo = document.querySelector("#buscador").value;
    localStorage.setItem("categoria", categoriaVideo);
})