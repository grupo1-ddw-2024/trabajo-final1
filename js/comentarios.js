const formularioComentario = document.getElementById('comentario-form');
const comentariosContenedor = document.getElementById('comentarios-contenedor');

function agregarComentario(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario-item');

    nuevoComentario.innerHTML = `
        <p><strong>${nombre}</strong></p>
        <p>${comentario}</p>
    `;
    comentariosContenedor.appendChild(nuevoComentario);
    formularioComentario.reset();
}
formularioComentario.addEventListener('submit', agregarComentario);
