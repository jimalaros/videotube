export function mostrarCards( contenedor, array){
    contenedor.innerHTML = ""
    array.forEach(function(card){
        const { img, id } = card
        contenedor.innerHTML += `<img class='cardPersonaje' id=${id} src="${img}">`
    })
}