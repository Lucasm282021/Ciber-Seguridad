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



