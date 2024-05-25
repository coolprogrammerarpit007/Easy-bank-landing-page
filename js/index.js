`use strict`;

// ********************************

// **********************************
// **********************************
let widthLimit = 768;
let windowWidth = window.innerWidth; // will give innerWidth of window

// **********************************
// **********************************
// Making the responsive navigation bar

const requestBtn = document.getElementById(`btn-request`);
const links = document.querySelector(`.links`);
const menuBtn = document.querySelector(`.menu-btn`);
const closeBtn = document.querySelector(`.menu-close`);

const modalMenu = document.querySelector(`.modal-menu`);
// Adding event to the menu btn

menuBtn.addEventListener(`click`, function (e) {
  menuBtn.classList.add(`hidden`);
  closeBtn.classList.remove(`hidden`);
  modalMenu.classList.remove(`hidden`);
});
// Adding event to the close btn

closeBtn.addEventListener(`click`, function (e) {
  closeBtn.classList.add(`hidden`);
  menuBtn.classList.remove(`hidden`);
  modalMenu.classList.add(`hidden`);
});
