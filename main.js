document.addEventListener('DOMContentLoaded', () => {
  cargarJSON('./poesias.JSON', 'poesias-galeria');
  cargarJSON('./novelas.JSON', 'novelas-galeria');
  cargarJSON('./cuentos.JSON', 'cuentos-galeria');
});

function cargarJSON(url, idGaleria) {
  const galeria = document.getElementById(idGaleria);
  if (!galeria) return;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(cuento => {
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
    })
    .catch(error => {
      console.error(`Error al cargar ${url}:`, error);
    });
}