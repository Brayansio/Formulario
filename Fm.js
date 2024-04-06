let formularioEnviado = false;

function validarFormulario() {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const evento = document.getElementById('evento').value;

  // Reset error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(errorMessage => errorMessage.textContent = '');

  // Validate name
  if (nombre === '') {
    document.getElementById('nombre-error').textContent = 'Por favor, ingresa tu nombre.';
    return false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('email-error').textContent = 'Por favor, ingresa un email válido.';
    return false;
  }

  // Validate phone number
  const telefonoRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  if (!telefonoRegex.test(telefono)) {
    document.getElementById('telefono-error').textContent = 'Por favor, ingresa un número de teléfono válido (Formato: 123-456-7890).';
    return false;
  }

  // Validate selected event
  if (evento === '') {
    document.getElementById('evento-error').textContent = 'Por favor, selecciona un evento.';
    return false;
  }

  // If everything is valid, submit the form (you can make an AJAX request here if you prefer)
  const mensaje = `Gracias por registrarte, ${nombre}.\n`;
  const detalles = `Detalles del Registro:\nEmail: ${email}\nTeléfono: ${telefono}\nEvento: ${evento}`;
  const mensajeCompleto = mensaje + detalles;
  
  const mensajeElement = document.getElementById('mensaje');
  mensajeElement.textContent = mensajeCompleto;
  mensajeElement.style.display = 'block'; // Mostrar el mensaje

  // Aquí puedes hacer el envío del formulario o realizar otras acciones, como un AJAX request

  formularioEnviado = true; // Marcar el formulario como enviado

  return false; // Evitar que el formulario se envíe
}
