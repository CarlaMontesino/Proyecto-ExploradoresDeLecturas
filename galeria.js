// Cargar JSON en la galería de cuentos, poesías y novelas

document.addEventListener('DOMContentLoaded', () => {
  const rutas = {
    'cuentos.html': { json: './cuentos.json', contenedor: 'cuentos-galeria' },
    'novelas.html': { json: './novelas.json', contenedor: 'novelas-galeria' },
    'poesias.html': { json: './poesias.json', contenedor: 'poesias-galeria' }
  };

  const paginaActual = window.location.pathname.split('/').pop();
  const datos = rutas[paginaActual];

  if (!datos) return;

  cargarjson(datos.json, datos.contenedor);
});

function cargarjson(url, idGaleria) {
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