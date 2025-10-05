// Evitar copia de contenido
document.addEventListener("copy", function(e) {
  if (e.clipboardData) {
    e.clipboardData.setData("text/plain", "Este contenido esta protegido y no puede ser copiado.");
    e.preventDefault(); // Evita que se copie el contenido real
  } else {
    alert("Tu navegador no permite modificar el portapapeles.");
  }
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





