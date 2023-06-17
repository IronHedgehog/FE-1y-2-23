const burger = document.querySelector(".header-burger");
const navMenu = document.querySelector(".header-menu");
const body = document.querySelector(".body");

burger.addEventListener("click", onClick);

function onClick(e) {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("lock");
}
