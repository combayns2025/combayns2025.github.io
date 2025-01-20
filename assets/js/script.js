// JavaScript to handle the toggling and closing of the menu on outside click
const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.navbar-menu');

// Toggle menu on hamburger click
hamburger.addEventListener('click', (e) => {
  e.stopPropagation();  // Prevent the click from bubbling up to document
  navbarMenu.classList.toggle('show');
});

// Close menu if click happens outside the menu
document.addEventListener('click', (e) => {
  if (!navbarMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navbarMenu.classList.remove('show');
  }
});
