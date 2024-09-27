// script.js
// Seleccionamos el contenedor del video, la flecha y los productos
const videoWrapper = document.querySelector('.video video');
const arrow = document.querySelector('.arrow');
const products = document.querySelectorAll('.buy .product');

const menu = document.querySelector('#menu #menu-logo');
const menuD = document.querySelector('.menu-info');

//Menu

let isRotated = false;

menu.addEventListener('click', () => {
    if (isRotated) {
        menu.style.transform = "rotate(0deg)";
        menuD.style.display = "none";
    } else {
        menu.style.transform = "rotate(90deg)";
        menuD.style.display = "inline";
    }
    isRotated = !isRotated; // Alterna el estado
});


window.addEventListener('scroll', () => {
    // Lógica para el contenedor del video y la flecha
    if (window.scrollY > 50) {
        videoWrapper.style.boxSizing = 'border-box'; 
        videoWrapper.style.width = '95%';
        videoWrapper.style.paddingBottom = '100px';
        arrow.style.opacity = '0';
        
    } else {
        videoWrapper.style.width = '100%';
        videoWrapper.style.paddingBottom = '';
        arrow.style.opacity = '1';
    }

    // Lógica para los productos
    if (window.scrollY > 100) {
        products.forEach(product => {
            product.style.boxSizing = 'border-box';
            product.style.width = '95%'; 
            product.style.marginBottom = '10px';
        });
    } else {
        products.forEach(product => {
            product.style.width = '100%'; // Restaurar el ancho de los productos
        });
    }
});

