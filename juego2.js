const preguntas = [
      {
        frase: "¿Preferís leer de día o de noche?",
        opciones: [
          { texto: "De día, con luz natural", feedback: "¡Sos un lector diurno, lleno de energía!" },
          { texto: "De noche, bajo las sábanas", feedback: "¡Sos un lector nocturno, soñador y curioso!" }
        ]
      },
      {
        frase: "¿Te gustan más los cuentos o las novelas largas?",
        opciones: [
          { texto: "Cuentos, rápidos y variados", feedback: "¡Sos un lector veloz, que disfruta historias cortas!" },
          { texto: "Novelas, para sumergirme", feedback: "¡Sos un lector profundo, que ama los detalles!" }
        ]
      },
      {
        frase: "¿Preferís leer en silencio o con música suave?",
        opciones: [
          { texto: "En silencio absoluto", feedback: "¡Sos un lector concentrado y enfocado!" },
          { texto: "Con música de fondo", feedback: "¡Sos un lector multisensorial!" }
        ]
      },
      {
        frase: "¿Marcás tus libros o los dejás impecables?",
        opciones: [
          { texto: "Subrayo y anoto", feedback: "¡Sos un lector activo y analítico!" },
          { texto: "Los dejo como nuevos", feedback: "¡Sos un lector cuidadoso y respetuoso!" }
        ]
      },
      {
        frase: "¿Cuál es tu lugar ideal para leer?",
        opciones: [
          { texto: "Una biblioteca silenciosa", feedback: "¡Sos un lector clásico!" },
          { texto: "Un rincón con almohadones y luz cálida", feedback: "¡Sos un lector acogedor!" }
        ]
      }
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
      opcionesElem.querySelectorAll('.boton-opcion').forEach((btn, idx) => {
        btn.style.opacity = idx === iOpcion ? '1' : '0.6';
      });
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < preguntas.length - 1) {
        currentIndex++;
        cargarPregunta();
      } else {
        fraseElem.textContent = 'Terminaste el test. ¡Sos un lector curioso y apasionado!';
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
        if (typeof history[currentIndex] === 'number') {
          mostrarFeedback(history[currentIndex]);
        }
      }
    });

document.addEventListener('DOMContentLoaded', cargarPregunta);
