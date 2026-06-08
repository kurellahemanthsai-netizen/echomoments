const themeBtn = document.querySelector(".theme-btn");
const rtlBtn = document.querySelector(".rtl-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

rtlBtn.addEventListener("click", () => {
  document.body.classList.toggle("rtl");
});