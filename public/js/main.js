// * selectors

const hamburgerOpen = document.querySelector("#hamburger-open");
const hamburgerClose = document.querySelector("#hamburger-close");
const menuOpen = document.querySelector("#menu-mobile-open");
const menuClose = document.querySelector("#menu-mobile-close");

// * event listeners

hamburgerOpen.addEventListener("click", handleClick);
hamburgerClose.addEventListener("click", handleClick);

// * functions

function handleClick() {
  console.log(menuOpen.style.visibility);
  if (menuOpen.style.visibility === "visible") {
    menuOpen.style.visibility = "hidden";
    menuOpen.style.opacity = "0";
    menuOpen.style.top = "-1000px";
  } else {
    menuOpen.style.visibility = "visible";
    menuOpen.style.opacity = "1";
    menuOpen.style.top = 0;
  }
}
