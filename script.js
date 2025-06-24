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

// Saludo 

const nombreUsuario = prompt("¡Hola, mi nombre es Lumi! ¿Cómo te llamas?");

// Si ingresó algo, lo saludamos; si no, damos un mensaje alternativo
if (nombreUsuario && nombreUsuario.trim() !== "") {
    alert(`¡Encantado de conocerte, ${nombreUsuario.trim()}!`);
} else {
  alert("¡Hola! No alcanzaste a escribir tu nombre, pero igual ¡bienvenid@!");
}


