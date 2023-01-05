const btnNavEl = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".nav");

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
});

/************************/
const lastMenuEl = document.querySelector(".lastMenu");
const othersBtn = document.querySelector(".others");
const timesIcon = document.querySelector(".lastMenu--icon");

othersBtn.addEventListener("click", function () {
  lastMenuEl.classList.remove("lastMenu--close");
  lastMenuEl.classList.add("lastMenu--open");
});

timesIcon.addEventListener("click", function () {
  lastMenuEl.classList.add("lastMenu--close");
  lastMenuEl.classList.remove("lastMenu--open");
});
