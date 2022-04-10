let Menu = document.getElementById("menuu");

let Menu_screen = document.getElementById("Screen");

Menu.addEventListener("click", function () {
  if (Menu_screen.style.width == "0vw") {
    Menu_screen.style.width = "100vw";
  } else {
    Menu_screen.style.width = "0vw";
  }
});
