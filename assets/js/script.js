document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navbarMenu = document.querySelector('.navbar-menu');

  // Toggle the menu when the hamburger icon is clicked
  hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
  });

  // Close the menu when clicking outside the navbar or on a menu item
  document.addEventListener('click', (event) => {
    if (!navbarMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navbarMenu.classList.remove('show');
    }
  });

  // Close the menu when clicking on a menu item
  const menuLinks = document.querySelectorAll('.navbar-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarMenu.classList.remove('show');
    });
  });
});
