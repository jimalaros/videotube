import { cards } from '../data/data.js'
import { mostrarCards } from '../modules/mostrar.js';

let saludo = document.getElementById("saludo");
const cardsC = document.getElementById('cards')
let nombre = localStorage.getItem("nombre");
let masoSeleccionado = JSON.parse(localStorage.getItem('mazo'));
let cartasSeleccionadas = masoSeleccionado ? masoSeleccionado : [];
let contador = document.querySelector('a');


saludo.textContent = `Hola ${nombre}, te damos la bienvenida`

mostrarCards(cardsC, cards);
contador.innerHTML = `
         <button>${cartasSeleccionadas.length}</button>
         `

document.addEventListener('dblclick', ({ target }) => {

    if (target.classList.contains('cardPersonaje')) {
        if (cartasSeleccionadas.length < 8) {
            Swal.fire(
                'Felicidades!',
                'Carta agregada correctamente',
                'success'
              )
            let idCarta = target.id;
            let carta = cards.find(item => item.id == idCarta);
            let indice = cards.indexOf(carta);
            cards.splice(indice, 1);


            mostrarCards(cardsC, cards);
            cartasSeleccionadas.push(carta);

            localStorage.setItem('mazo', JSON.stringify(cartasSeleccionadas));
            contador.innerHTML = `
             <button>${cartasSeleccionadas.length}</button>
             `
        } else {
            Swal.fire(
                'Oops!',
                'Ya no puedes agregar más cartas',
                'warning'
              ) 
        }
    }
});