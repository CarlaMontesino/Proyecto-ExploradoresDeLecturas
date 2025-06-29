/* 

window.addEventListener('DOMContentLoaded', () => {
  // 1. Saludo con prompt
  const nombreUsuario = prompt("¡Hola, mi nombre es Lumi! ¿Cómo te llamas?");
  const mensajeDiv = document.getElementById("mensaje");
  if (nombreUsuario && nombreUsuario.trim()) {
    alert(`¡Encantado de conocerte, ${nombreUsuario.trim()}!`);
    if (mensajeDiv) {
      mensajeDiv.textContent = `Hola ${nombreUsuario.trim()}, bienvenid@ a Exploradores de Lecturas`;
    }
  } else {
    alert("¡Hola! No alcanzaste a escribir tu nombre, pero igual ¡bienvenid@!");
  }

  // 2. (Si tenés botones de opciones estáticas)
  document.querySelectorAll('.boton-opcion').forEach((btn, i) => {
    btn.addEventListener('click', () => mostrarFeedback(i + 1));
  });
});


