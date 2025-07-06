/* Página del juego - muestra */

function mostrarFeedback(opcion) {
    const feedback = document.getElementById('feedback');
    if (opcion === 1) {
        feedback.innerHTML = '¡Exacto! A veces lo más valioso no se ve, pero se siente';
    } else {
        feedback.innerHTML = '¡Ji, ji, ji! Tal vez no con lupa, pero sí con el corazón';
    }
    feedback.style.display = 'block';
}


/* Página docentes, para que las cajas brinden la información de la actividad */

function toggleContenido(caja) {
  caja.classList.toggle('activa');
}

// Saludo es muy molesto
/* 
const nombreUsuario = prompt("¡Hola, mi nombre es Lumi! ¿Cómo te llamas?");

// Si ingresó algo, lo saludamos; si no, damos un mensaje alternativo
if (nombreUsuario && nombreUsuario.trim() !== "") {
    alert(`¡Encantado de conocerte, ${nombreUsuario.trim()}!`);
} else {
  alert("¡Hola! No alcanzaste a escribir tu nombre, pero igual ¡bienvenid@!");
}
*/

// menú hamburguesa
document.getElementById('btnMenu').addEventListener('click', function() {
  document.getElementById('menuDesplegable').classList.toggle('activo');
});

// Opcional: cierra el menú cuando se elige una opción
document.querySelectorAll('.menu-desplegable a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menuDesplegable').classList.remove('activo');
  });
});


