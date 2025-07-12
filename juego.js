const preguntas = [
      {
        frase: "Lo esencial es invisible a los ojos.\n– El Principito",
        opciones: [
          { texto: "Lo más importante no siempre se ve", feedback: "¡Exacto! A veces lo más valioso se siente más que se ve." },
          { texto: "Hay que usar anteojos", feedback: "¡Jeje! No hace falta anteojos... ¡sino corazón!" }
        ]
      },
      {
        frase: "'¿De qué sirve un libro sin dibujos ni conversaciones?'\n– Alicia en el País de las Maravillas",
        opciones: [
          { texto: "De nada, ¡los libros deben entretener!", feedback: "¡Claro! A veces necesitamos historias que también nos diviertan." },
          { texto: "De mucho, si son largos", feedback: "Puede ser... ¡pero cada lector busca algo diferente!" }
        ]
      },
      {
        frase: "'Cuando una persona es demasiado obediente, deja de pensar por sí misma.'\n– Pinocho",
        opciones: [
          { texto: "Está bien cuestionar a veces", feedback: "¡Exacto! Pensar por uno mismo es muy valioso." },
          { texto: "Hay que hacer siempre lo que te dicen", feedback: "Hmm... a veces sí, pero también hay que reflexionar." }
        ]
      },
      {
        frase: "'Los libros son un poder del que pocos saben su magia.'\n– Matilda",
        opciones: [
          { texto: "Leer me hace más fuerte", feedback: "¡Sí! La lectura despierta un superpoder." },
          { texto: "Los libros son aburridos", feedback: "¡Ups! Tal vez aún no encontraste el adecuado." }
        ]
      },
      {
        frase: "'No necesitas nada más que tú mismo para encontrar el camino.'\n– El mago de Oz",
        opciones: [
          { texto: "Tengo lo necesario en mí", feedback: "¡Tal cual! La valentía y el amor están dentro tuyo." },
          { texto: "Necesito que me digan qué hacer", feedback: "A veces ayuda... pero ¡también podés decidir por vos!" }
        ]
      },
      {
        frase: "'Los sueños pueden convertirse en realidad si crees en ellos.'\n– Peter Pan",
        opciones: [
          { texto: "Sí, hay que creer para volar", feedback: "¡Esa es la actitud de un explorador de lecturas!" },
          { texto: "No, los sueños no sirven", feedback: "¡Hmm! ¿Y si probamos soñar despiertos un rato?" }
        ]
      },
      {
        frase: "'La casa hecha de chocolate no siempre es tan dulce como parece.'\n– Hansel y Gretel",
        opciones: [
          { texto: "Las apariencias engañan", feedback: "¡Exacto! No todo lo bonito es bueno." },
          { texto: "Chocolate es chocolate", feedback: "Sí... pero ¡ojo con lo que viene detrás!" }
        ]
      },
      {
        frase: "'Aunque seas pequeño, puedes hacer cosas grandes.'\n– Pulgarcito",
        opciones: [
          { texto: "No importa el tamaño, sino la valentía", feedback: "¡Bravo! Ser valiente es lo que más importa." },
          { texto: "Los pequeños no pueden hacer mucho", feedback: "¡Uy! Pulgarcito estaría en desacuerdo contigo..." }
        ]
      },
      {
        frase: "'Todo lo que te imagines es posible en la fábrica de chocolate.'\n– Charlie y la fábrica de chocolate",
        opciones: [
          { texto: "La imaginación no tiene límites", feedback: "¡Sí! La mente es como una fábrica mágica." },
          { texto: "Solo es una fábrica normal", feedback: "¿Estás seguro? ¡Quizás deberías volver a imaginar!" }
        ]
      },
      {
        frase: "'Los cuentos ayudan a entender el mundo, y a cambiarlo también.'\n– Inspirado en múltiples autores",
        opciones: [
          { texto: "Leer transforma", feedback: "¡Exacto! Una historia puede abrir miles de caminos." },
          { texto: "Los cuentos no cambian nada", feedback: "Tal vez... pero algunos sí cambian corazones." }
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
        if (typeof history[currentIndex] === 'number') {
          mostrarFeedback(history[currentIndex]);
        }
      }
    });

    document.addEventListener('DOMContentLoaded', cargarPregunta);