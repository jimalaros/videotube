export function mostrarData( contenedor, array){
    contenedor.innerHTML = ""
    array.forEach(function(video){
        const { url, img, id } = video;
        const vid = `<video class='cardPersonaje' id=${id} src=${url} poster=${img} width="200px" height="100px" controls></video>`
        //const boton = `<button onclick=alert("click")>DETALLES</button>`
        contenedor.innerHTML += vid;
    })
}