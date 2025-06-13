/* Página del juego - muestra */

function mostrarFeedback(opcion) {
    const feedback = document.getElementById('feedback');
    if (opcion === 1) {
        feedback.innerText = '¡Exacto! A veces lo más valioso no se ve, pero se siente';
    } else {
        feedback.innerText = '¡Ji, ji, ji! Tal vez no con lupa, pero sí con el corazón';
    }
    feedback.style.display = 'block';
}

/* Página docentes, para que las cajas brinden la información de la actividad */

  function toggleContenido(caja) {
    caja.classList.toggle('activa');
  }

