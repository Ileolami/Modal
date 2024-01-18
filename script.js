'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

const openCloseModal =() => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

showModal.forEach((e) => {
    e.addEventListener('click', openCloseModal);
});


btnCloseModal.addEventListener('click', openCloseModal);