// Toggle navigation menu on small screens
const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});
