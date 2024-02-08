'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclsmodal = document.querySelector('.close-modal');
const btnopenmodal = document.querySelectorAll('.show-modal');

console.log(btnopenmodal);

const open = function () {
  console.log('Button click');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnopenmodal.length; i++) {
  btnopenmodal[i].addEventListener('click', open);
}
btnclsmodal.addEventListener('click', close);
overlay.addEventListener('click', close);
