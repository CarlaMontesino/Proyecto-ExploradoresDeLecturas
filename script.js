


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

//Formulario de contacto

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formContacto');
  const mensajeExito = document.getElementById('mensaje-exito');
  if(form){
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      mensajeExito.textContent = "¡Gracias por tu mensaje! Te responderemos pronto 😊";
      form.reset();
      setTimeout(()=>mensajeExito.textContent = "", 4000);
    });
  }
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

// Función para renderizar la galería
function mostrarCuentos(cuentos, galeria) {
  cuentos.forEach(cuento => {
    const card = document.createElement('div');
    card.className = 'tarjeta-cuento';
    card.innerHTML = `
      <img src="${cuento.imagen}" alt="Portada de ${cuento.titulo}">
      <h4>${cuento.titulo}</h4>
      <p><strong>Autor:</strong> ${cuento.autor}</p>
      <p>${cuento.descripcion}</p>
    `;
    galeria.appendChild(card);
  });
}

// poesias

document.addEventListener('DOMContentLoaded', () => {
  const galeria = document.getElementById('galeria-poesias');
  if (!galeria) return;

  fetch('./poesias.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(poesia => {
        const card = document.createElement('div');
        card.className = 'tarjeta-cuento'; // reutilizamos estilos
        card.innerHTML = `
          <img src="${poesia.imagen}" alt="Imagen de ${poesia.titulo}">
          <h4>${poesia.titulo}</h4>
          <p><strong>Autor:</strong> ${poesia.autor}</p>
          <p>${poesia.descripcion}</p>
        `;
        galeria.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error al cargar las poesías:', error);
    });
});


// novelas

document.addEventListener('DOMContentLoaded', () => {
  const galeria = document.getElementById('galeria-novelas');
  if (!galeria) return;

  fetch('./novelas.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(novela => {
        const card = document.createElement('div');
        card.className = 'tarjeta-cuento';
        card.innerHTML = `
          <img src="${novela.imagen}" alt="Portada de ${novela.titulo}">
          <h4>${novela.titulo}</h4>
          <p><strong>Autor:</strong> ${novela.autor}</p>
          <p>${novela.descripcion}</p>
        `;
        galeria.appendChild(card);
      });
    })
    .catch(error => console.error('Error al cargar las novelas:', error));
});





