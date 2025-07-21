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