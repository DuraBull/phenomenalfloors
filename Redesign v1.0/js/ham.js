let brandHam = document.querySelector(".hamburger");
let brandNav = document.querySelector(".main-nav");
brandHam.addEventListener("click", openNav);

console.log(brandHam);

function openNav() {
  brandNav.classList.toggle("active");
}
