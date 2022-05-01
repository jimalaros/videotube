export function mostrarInfo(sección, objeto) {
    sección.innerHTML = `
    <div>
        <div class="card my-3" text-light">
            <video class='cardVideo' id=${objeto.id} src=${objeto.url} poster=${objeto.img} width="500px" height="250px" controls>
            </video> <br />
    
            <h1>${objeto.nombreCancion}</h1>
            <p>${objeto.categoria}</p>
            <p>${objeto.cantante}</p>
        </div>
    </div>
    `
}