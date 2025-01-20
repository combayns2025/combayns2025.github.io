// Select the hamburger icon and the navbar menu
const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.navbar-menu');

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});
