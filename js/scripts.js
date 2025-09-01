// Evitar copia de contenido
document.addEventListener("copy", function(e) {
  if (e.clipboardData) {
    e.clipboardData.setData("text/plain", "Este contenido esta protegido y no puede ser copiado.");
    e.preventDefault(); // Evita que se copie el contenido real
  } else {
    alert("Tu navegador no permite modificar el portapapeles.");
  }
});

// modal dialog
document.getElementById('abrir-dialogo').addEventListener('click', () => {
  const dialogo = document.getElementById('seguridad-dialog');
  if (dialogo) dialogo.showModal();
});
document.getElementById('abrir-contraseña').addEventListener('click', () => {
  const dialogo = document.getElementById('contraseñas-seguras');
  if (dialogo) dialogo.showModal();
});
document.getElementById('abir-mantener_privado').addEventListener('click', () => {
  const dialogo = document.getElementById('mantener-privado');
  if (dialogo) dialogo.showModal();
});

// Menú hamburguesa responsive
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.tech-menu');

toggle.addEventListener('click', () => {
  // Alternar clase visual
  menu.classList.toggle('open');
  toggle.classList.toggle('open');

  // Verificar estado actual después del toggle
  const isOpen = menu.classList.contains('open');

  // Actualizar atributos ARIA
  toggle.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-hidden', String(!isOpen));
});





