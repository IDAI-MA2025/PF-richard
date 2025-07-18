// MENU RESPONSIVE
var btnMenuOpen = document.getElementById('btnMenuOpen');
var btnMenuClose = document.getElementById('btnMenuClose');
var menubar = document.getElementById('menubar');

btnMenuOpen.addEventListener('click', function() {
    menubar.classList.add('active');
});

btnMenuClose.addEventListener('click', function() {
    menubar.classList.remove('active');
});

var enlaces = document.getElementById('enlaces');
enlaces.addEventListener('click', function() {
    menubar.style.transitionDelay = '0.5s';
    menubar.classList.remove('active');
});

/* SLIDER DE PRODUCTOS */
var contenedor 
    = document.querySelector('.slider');
var btnIzq = document.getElementById("btn-izquierda");
var btnDer = document.getElementById("btn-derecha");

btnDer.addEventListener('click', function() {
    //container.scrollLeft = container.scrollLeft + 
    contenedor.scrollLeft += contenedor.offsetWidth;
});

btnIzq.addEventListener('click', function() {
    //container.scrollLeft = container.scrollLeft + 
    contenedor.scrollLeft -= contenedor.offsetWidth;
});