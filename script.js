


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

//Formulario de contacto
emailjs.init('ZhGa0E1U_tiY1jQ-6');

document.getElementById('formContacto').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = this;
    const mensaje = document.getElementById('mensaje-exito');
    const sonido = document.getElementById('sonidoCheck');

    emailjs.sendForm('service_c7erjwi', 'template_3ny474h', form)
      .then(() => {
        mensaje.textContent = '¡Gracias por tu mensaje! ✨';
        mensaje.classList.add('mensaje-exito');
        sonido.play(); // 🔊 Suena el "check"
        form.reset();
      }, (error) => {
        mensaje.textContent = '❌ Ocurrió un error al enviar. Intentá nuevamente.';
        console.error('EmailJS error:', error);
      });
});






// Cargar cuentos desde el archivo JSON al cargar la página

document.addEventListener('DOMContentLoaded', () => {
  const galeria = document.getElementById('cuentos-galeria');
  if (!galeria) return;

  fetch('./cuentos.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
      }
      return response.json();
    })
    .then(data => mostrarCuentos(data, galeria))
    .catch(error => console.error('Error al cargar los cuentos:', error));
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


// Cargar JSON en la galería de cuentos, poesías y novelas

document.addEventListener('DOMContentLoaded', () => {
  const rutas = {
    'cuentos.html': { json: './cuentos.JSON', contenedor: 'cuentos-galeria' },
    'novelas.html': { json: './novelas.JSON', contenedor: 'novelas-galeria' },
    'poesias.html': { json: './poesias.JSON', contenedor: 'poesias-galeria' }
  };

  const paginaActual = window.location.pathname.split('/').pop();
  const datos = rutas[paginaActual];

  if (!datos) return;

  cargarJSON(datos.json, datos.contenedor);
});

function cargarJSON(url, idGaleria) {
  const galeria = document.getElementById(idGaleria);
  if (!galeria) return;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      return response.json();
    })
    .then(data => {
      data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'tarjeta-cuento';

        card.innerHTML = `
          <img src="${item.imagen}" alt="Portada de ${item.titulo}" class="portada">
          <h4>${item.titulo}</h4>
          <p><strong>Autor:</strong> ${item.autor} ${item.año ? `(${item.año})` : ''}</p>
          <p>${item.descripcion}</p>
          <div class="botones-lectura">
            <a href="${item.linkLectura}" class="btn-leer" target="_blank">📖 Leer</a>
            ${item.fuente ? `<a href="${item.fuente}" class="btn-fuente" target="_blank">🔗 Fuente</a>` : ''}
          </div>
        `;

        galeria.appendChild(card);
      });
    })
    .catch(error => {
      console.error(`Error al cargar ${url}:`, error);
    });
}





