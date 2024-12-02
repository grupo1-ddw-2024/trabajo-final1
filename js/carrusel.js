const carrusel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let indiceActual = 0;

function siguienteImagen() {
    items[indiceActual].classList.remove('activo');
    indiceActual = (indiceActual + 1) % items.length;
    items[indiceActual].classList.add('activo');
}

function imagenAnterior() {
    items[indiceActual].classList.remove('activo');
    indiceActual = (indiceActual - 1 + items.length) % items.length;
    items[indiceActual].classList.add('activo');
}

setInterval(siguienteImagen, 5000);

const btnSiguiente = document.querySelector('.carousel-control-next');
const btnAnterior = document.querySelector('.carousel-control-prev');

btnSiguiente.addEventListener('click', siguienteImagen);
btnAnterior.addEventListener('click', imagenAnterior);
