// Select the hamburger icon and the navbar
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

// Function to toggle the navbar visibility on mobile
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show-nav');
});

// Optional: Close the navbar if any of the links are clicked
navLinks.addEventListener('click', () => {
  if (navbar.classList.contains('show-nav')) {
    navbar.classList.remove('show-nav');
  }
});

// Optional: Close the navbar when clicking outside the navbar (on mobile)
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove('show-nav');
  }
});
