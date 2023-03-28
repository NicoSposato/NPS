// Obtener los elementos relevantes del DOM
const npsBar = document.getElementById('nps-bar');
const npsButtons = npsBar.getElementsByClassName('nps-button');
const npsForm = document.getElementById('nps-form');
const npsThankyou = document.getElementById('nps-thankyou');
const npsComment = document.getElementById('nps-comment');

// Controlador de eventos para los botones NPS
for (let i = 0; i < npsButtons.length; i++) {
  npsButtons[i].addEventListener('click', function () {
    // Ocultar los botones NPS y mostrar el formulario de comentarios
    npsBar.classList.add('nps-bar-feedback');
  });
}

// Controlador de eventos para el envío del formulario
npsForm.addEventListener('submit', function (event) {
  // Prevenir que el formulario se envíe
  event.preventDefault();

  // Mostrar el mensaje de agradecimiento y ocultar el formulario de comentarios
  npsThankyou.classList.add('nps-thankyou-visible');
  npsForm.classList.remove('nps-feedback-visible');
});




