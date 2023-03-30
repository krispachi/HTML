const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function() {
    nav.classList.toggle("slide");
});

function hideHamburger() {
    document.querySelector(".menu-toggle input").checked = false;
    nav.classList.toggle("slide");
}