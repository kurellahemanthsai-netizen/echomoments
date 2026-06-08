const body = document.body;

document.getElementById("themeToggle").addEventListener("click", () => {
  body.classList.toggle("dark");
});

document.getElementById("rtlToggle").addEventListener("click", () => {
  body.classList.toggle("rtl");
});