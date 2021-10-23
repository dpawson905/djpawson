const body = document.querySelector("body");
const menuCheckbox = document.querySelector(".navigation__checkbox");

// Works for users toggling the menu with keyboard
// if the checkbox is hidden by setting its opacity
// to 0 and its z-index to -1 so it's reachable
// with the tab key, but not clickable.
// And not display: none nor visibility: hidden
menuCheckbox.addEventListener("change", () =>
  body.classList.toggle("u-hide-overflow-y")
);