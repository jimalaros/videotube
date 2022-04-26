import { mostrarCards } from "../modules/mostrar.js";

let welcomeSection = document.getElementById('saludo');
let nameU = localStorage.getItem('nombre');
let containerCards = document.getElementById('cards');
let seleccionadas = JSON.parse(localStorage.getItem('mazo'));


welcomeSection.textContent = `Hola ${nameU}, estas son tus cartas`;

mostrarCards(containerCards, seleccionadas)



