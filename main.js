const toggleButton = document.querySelector('.toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});



// Obtener el botón de menú y la lista de opciones del menú
const toggleButton = document.querySelector('.toggle');
const menuList = document.querySelector('.menu');

// Agregar un event listener al botón de menú para mostrar u ocultar la lista de opciones del menú
toggleButton.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

// Agregar un event listener a todos los enlaces de la lista de opciones del menú para cerrar la lista de opciones del menú al hacer clic en ellos
menuList.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuList.classList.remove('active');
  });
});

// Obtener todas las barras de habilidades
const skillBars = document.querySelectorAll('.porcentaje');

// Animar las barras de habilidades
skillBars.forEach((bar) => {
  const percentage = bar.dataset.porcentaje;
  bar.style.width = `${percentage}%`;
});

// Obtener el elemento de la caja
const caja = document.querySelector('.caja');

// Añadir un evento al hacer clic en la caja para cambiar el color a azul
caja.addEventListener('click', function() {
  this.style.backgroundColor = 'blue';
});

// Seleccionar el botón de menú y el menú
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

// Añadir un evento al botón de menú para abrir y cerrar el menú
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
});
// Obtener el elemento del contador de visitas
const visitCountElement = document.getElementById('visitCount');

// Obtener el número de visitas almacenado en el localStorage
let visitCount = localStorage.getItem('visitCount');

// Verificar si el número de visitas existe en el localStorage
if (visitCount) {
  visitCount = parseInt(visitCount) + 1;
} else {
  visitCount = 1;
}

// Guardar el número de visitas actualizado en el localStorage
localStorage.setItem('visitCount', visitCount);

// Mostrar el número de visitas en el elemento del contador
visitCountElement.textContent = visitCount;
