'use strict';

var burger = document.querySelector('.header__burger');
var body = document.querySelector('body');
var menu = document.querySelector('.menu');
var wrapper = document.querySelector('.header__wrapper');

menu.classList.remove('menu--nojs');
burger.classList.remove('header__burger--nojs');
wrapper.classList.remove('header__wrapper--nojs');

burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
}
);

var menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    burger.classList.remove('active');
    menu.classList.remove('active');
  });
});
