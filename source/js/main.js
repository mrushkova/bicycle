'use strict';

var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
}
);

var menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    burger.classList.remove('active');
    menu.classList.remove('active');
  });
});
