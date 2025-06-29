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

// Saludo 

const nombreUsuario = prompt("¡Hola, mi nombre es Lumi! ¿Cómo te llamas?");

// Si ingresó algo, lo saludamos; si no, damos un mensaje alternativo
if (nombreUsuario && nombreUsuario.trim() !== "") {
    alert(`¡Encantado de conocerte, ${nombreUsuario.trim()}!`);
} else {
  alert("¡Hola! No alcanzaste a escribir tu nombre, pero igual ¡bienvenid@!");
}

document.getElementById("mensaje").textContent = "Hola " + nombreUsuario + "bienvenid@ a Exploradores de Lecturas";


/* Intento para que el formulario sea funcional

function handleCreateAccount() {
  const newUser = prompt("¡Hola! Vamos a crear tu usuario. Escribí el nombre de usuario que quieras:");
  if (newUser && newUser.trim() !== "") {
  localStorage.setItem('savedUser', newUser.trim());
  alert(`Usuario "${newUser.trim()}" creado exitosamente. Ahora podés iniciar sesión.`);
  } else {
    alert("Por favor, escribí un nombre de usuario válido.");
  }
}

  function handleLogin() {
  const user = document.getElementById('username').value.trim();
  const savedUser = localStorage.getItem('savedUser');
  if (!user) {
  alert('Por favor, ingresá tu usuario antes de continuar.');
    return;
  }
  if (savedUser && user === savedUser) {
    alert(`¡Bienvenido/a, ${user}!`);
  } else {
  alert("Usuario no encontrado. Podés crear una cuenta primero.");
  }
}
*/

