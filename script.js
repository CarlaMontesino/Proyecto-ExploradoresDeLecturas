


/* Página recursos, para que las cajas brinden la información de la actividad */

function toggleContenido(caja) {
  caja.classList.toggle('activa');
}

// Saludo (es muy molesto no se por qué)
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

//  cierra al hacer clic fuera
document.addEventListener('click', function (event) {
  const menu = document.getElementById('menuDesplegable');
  const btn = document.getElementById('btnMenu');
  if (!menu.contains(event.target) && !btn.contains(event.target)) {
    menu.classList.remove('activo');
  }
});


// Carrousel de imágenes index

let slideIndex = 0;
  const slides = document.querySelectorAll('.carrusel-slide');
  const dots = document.querySelectorAll('.dot');

  function mostrarSlide(index) {
    slideIndex = index;
    actualizarCarrusel();
  }

  function actualizarCarrusel() {
    slides.forEach((slide, i) => {
      slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === slideIndex);
    });
  }

  function avanzarSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    actualizarCarrusel();
  }

  // Inicializar carrusel
  actualizarCarrusel();
  setInterval(avanzarSlide, 5000);








