const menuButton = document.getElementById('menu');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu--open');
  nav.classList.toggle('nav--open');
});

/*Footer*/
// Copyright
document.getElementById('currentyear').textContent = new Date().getFullYear()
// Last modified
document.getElementById('lastmodified').textContent = `Last modified: ${document.lastModified}`