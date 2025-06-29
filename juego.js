const preguntas = [
      { frase: "Lo esencial es invisible a los ojos.", opciones: [
        { texto: "Que lo más importante no siempre se puede ver", feedback: "¡Exacto! A veces lo más valioso no se ve, pero se siente." },
        { texto: "Que hay que mirar todo con lupa", feedback: "¡Jeje! Tal vez no con lupa, pero sí con el corazón." }
      ] },
      // ... agrega tus preguntas aquí ...
    ];
    let currentIndex = 0;
    const history = [];

    const fraseElem = document.getElementById('fraseTexto');
    const opcionesElem = document.getElementById('opciones');
    const feedbackElem = document.getElementById('feedback');
    const backBtn = document.getElementById('btn-back');
    const nextBtn = document.getElementById('btn-next');

    function cargarPregunta() {
      const p = preguntas[currentIndex];
      fraseElem.textContent = p.frase;
      opcionesElem.innerHTML = '';
      feedbackElem.style.display = 'none';
      feedbackElem.textContent = '';
      nextBtn.disabled = true;
      backBtn.disabled = currentIndex === 0;

      p.opciones.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'boton-opcion';
        btn.textContent = opt.texto;
        btn.addEventListener('click', () => mostrarFeedback(i));
        opcionesElem.appendChild(btn);
      });
    }

    function mostrarFeedback(iOpcion) {
      const opt = preguntas[currentIndex].opciones[iOpcion];
      feedbackElem.textContent = opt.feedback;
      feedbackElem.style.display = 'block';
      history[currentIndex] = iOpcion;
      nextBtn.disabled = false;
      // resaltamos la opción seleccionada
      opcionesElem.querySelectorAll('.boton-opcion').forEach((btn, idx) => {
        btn.style.opacity = idx === iOpcion ? '1' : '0.6';
      });
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < preguntas.length - 1) {
        currentIndex++;
        cargarPregunta();
      } else {
        fraseElem.textContent = '¡Gracias por jugar! Sigue explorando.';
        opcionesElem.innerHTML = '';
        feedbackElem.style.display = 'none';
        backBtn.disabled = false;
        nextBtn.disabled = true;
      }
    });

    backBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        cargarPregunta();
        // si ya había una respuesta, mostrarla
        if (typeof history[currentIndex] === 'number') {
          mostrarFeedback(history[currentIndex]);
        }
      }
    });

    document.addEventListener('DOMContentLoaded', cargarPregunta);