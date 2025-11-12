// Resaltar el menú según scroll y activar item
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Añadir sombra a navbar al hacer scroll
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', function() {
    if(window.scrollY > 60) {
      nav.style.boxShadow = '0 2px 19px #1b263832';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
});
