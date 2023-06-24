const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".menu-close");
const menu = document.querySelector(".menu-container");
const body = document.querySelector(".body");

openMenu.addEventListener("click", onClick);
closeMenu.addEventListener("click", onClick);

function onClick(e) {
  menu.classList.toggle("is-open");
  body.classList.toggle("lock");
}
