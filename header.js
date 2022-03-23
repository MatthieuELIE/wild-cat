// header2

const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");

function toggleMenu() {
  navbar.classList.toggle("show-nav");
}

burger.addEventListener("click", (e) => {
  toggleMenu();
});

document.querySelectorAll(".navbar__links").forEach(function (element) {
  element.addEventListener("click", function () {
    toggleMenu();
  });
});
