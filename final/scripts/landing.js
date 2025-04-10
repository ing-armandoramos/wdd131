const menuButton = document.getElementById('menu');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu--open');
  nav.classList.toggle('nav--open');
});