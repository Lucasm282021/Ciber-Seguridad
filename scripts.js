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

// Alternar visibilidad del menú
toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
  toggle.classList.toggle('open');

  const isOpen = menu.classList.contains('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-hidden', String(!isOpen));
});

// Cerrar menú al hacer clic en cualquier ítem
const menuItems = menu.querySelectorAll('a'); // o 'li a' si están dentro de <li>

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.classList.remove('open');

    toggle.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  });
});



