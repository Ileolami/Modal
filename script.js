'use strict';

const modal1 = document.querySelector('#modal1');
const modal2 = document.querySelector('#modal2');
const modal3 = document.querySelector('#modal3');
const modal4 = document.querySelector('#modal4');
const modal5 = document.querySelector('#modal5');
const modal6 = document.querySelector('#modal6');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const showModal1 = document.querySelector('#showModal1');
const showModal2 = document.querySelector('#showModal2');
const showModal3 = document.querySelector('#showModal3');
const showModal4 = document.querySelector('#showModal4');
const showModal5 = document.querySelector('#showModal5');
const showModal6 = document.querySelector('#showModal6');
const toggleButton = document.getElementById('toggleButton');

// toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('btn-toggle');
//     toggleButton.classList.toggle('btn-toggle');

//     document.querySelectorAll('.modal').forEach((modal) => {
//         modal.classList.toggle('btn-toggle');
//     });
// });
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('btn-toggle');
    toggleButton.classList.toggle('btn-toggle');

    document.querySelectorAll('.modal').forEach((modal) => {
        modal.classList.toggle('btn-toggle');
    });

    // Save the current state to localStorage
    localStorage.setItem('toggleState', document.body.classList.contains('btn-toggle') ? 'true' : 'false');
});

// On page load, check the saved state and update the page accordingly
window.addEventListener('load', () => {
    const savedState = localStorage.getItem('toggleState') === 'true';
    const toggleState = document.body.classList.contains('btn-toggle');

    if (savedState && !toggleState || !savedState && toggleState ) {
        document.body.classList.toggle('btn-toggle');
        toggleButton.classList.toggle('btn-toggle');

        document.querySelectorAll('.modal').forEach((modal) => {
            modal.classList.toggle('btn-toggle');
        });
    // } else if (!savedState && toggleState) {
    //     document.body.classList.remove('btn-toggle');
    //     toggleButton.classList.remove('btn-toggle');

    //     document.querySelectorAll('.modal').forEach((modal) => {
    //         modal.classList.remove('btn-toggle');
    //     });
    }
});
showModal1.addEventListener('click', () => {
    modal1.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

showModal2.addEventListener('click', () => {
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

showModal3.addEventListener('click', () => {
    modal3.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

showModal4.addEventListener('click', () => {
    modal4.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

showModal5.addEventListener('click', () => {
    modal5.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

showModal6.addEventListener('click', () => {
    modal6.classList.remove('hidden');
    overlay.classList.remove('hidden');
});


btnCloseModal.forEach(btn => btn.addEventListener('click', () =>{
    modal1.classList.add('hidden');
    modal2.classList.add('hidden');
    modal3.classList.add('hidden');
    modal4.classList.add('hidden');
    modal5.classList.add('hidden');
    modal6.classList.add('hidden');
    overlay.classList.add('hidden');
}));