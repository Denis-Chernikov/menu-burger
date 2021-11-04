'use strict'

let burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-menu_not-active');
    burgerMenu.classList.toggle('burger-menu_active');
});