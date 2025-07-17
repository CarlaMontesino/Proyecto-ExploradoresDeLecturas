document.addEventListener('DOMContentLoaded', () => {
  cargarJSON('data/poesias.JSON', 'galeria-poesias');
  cargarJSON('data/novelas.JSON', 'galeria-novelas');
  cargarJSON('./cuentos.JSON', 'cuentos-galeria');
});

function cargarJSON(url, idGaleria) {
  const galeria = document.getElementById(idGaleria);
  if (!galeria) return;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'tarjeta-cuento';
        card.innerHTML = `
          <img src="${item.imagen}" alt="Imagen de ${item.titulo}">
          <h4>${item.titulo}</h4>
          <p><strong>Autor:</strong> ${item.autor}</p>
          <p>${item.descripcion}</p>
        `;
        galeria.appendChild(card);
      });
    })
    .catch(error => {
      console.error(`Error al cargar ${url}:`, error);
    });
}