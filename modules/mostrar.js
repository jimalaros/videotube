export function mostrarData(contenedor, array){
    contenedor.innerHTML = ""
    array.forEach(function(video){
        const { url, img, id, nombreCancion } = video;
        contenedor.innerHTML += `
        <div class="card my-3" style="width: 25rem; text-light bg-dark">
            <video class='cardVideo' id=${id} src=${url} poster=${img} width="200px" height="100px" controls>
            </video>
        
            <div>
                <p>${nombreCancion}</p>
            </div>
        </div>
        `

    })
}