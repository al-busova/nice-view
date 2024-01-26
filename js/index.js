const refs = {
  burgerMenuOpen: document.querySelector(".btn-menu"),
  burgerMenu: document.querySelector(".wrapper-burger"),
  burgerBtnClose: document.querySelector(".btn-close-menu"),
};
refs.burgerMenuOpen.addEventListener("click", openBurgerMenu);
refs.burgerBtnClose.addEventListener("click", closeBurgerMenu);
window.addEventListener("keydown", handleKeyDown);

function openBurgerMenu() {
  refs.burgerMenu.classList.add("is-active");
  document.body.classList.add("no-scroll");
}
function closeBurgerMenu() {
  refs.burgerMenu.classList.remove("is-active");
  document.body.classList.remove("no-scroll");
}

function handleKeyDown(e) {
  if (e.code === "Escape") {
    closeBurgerMenu();
  }
}
openBurgerMenu();
closeBurgerMenu();
