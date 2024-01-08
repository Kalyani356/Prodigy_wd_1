const one = document.querySelector(".one");
const navList = document.querySelector(".menu-overlay");

one.addEventListener("click", function () {
  navList.classList.toggle("active");
  one.classList.toggle("click");
});
