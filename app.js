const btnClose = document.querySelector("#nav-close");
const btnToggle = document.querySelector("#nav-toggle");

btnToggle.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", closeMenu);

//Menu deroulant
function toggleMenu() {
  document.querySelector(".nav__list").classList.add("visible");
  document.querySelector(".nav__close").classList.add("close");
  document.querySelector(".nav__list").classList.remove("nav__list");
}

//Fermer le menu deroulant
function closeMenu() {
  document.querySelector(".nav__list").classList.remove("visible");
  console.log("reussi");
}
