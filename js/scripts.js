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
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainnav');
const navLinks = document.querySelectorAll('.header__nav-link');

function toggleMenu() {
    nav.classList.toggle('header__nav--open');
    hamburger.setAttribute('aria-expanded', nav.classList.contains('header__nav--open'));
}
hamburger.addEventListener('click', toggleMenu);
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('header__nav--open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});





