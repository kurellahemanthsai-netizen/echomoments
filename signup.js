const themeBtn = document.getElementById("themeToggle");
const rtlBtn = document.getElementById("rtlToggle");

/* ================= DARK MODE ================= */
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* ================= RTL MODE ================= */
rtlBtn.addEventListener("click", () => {
  if (document.body.getAttribute("dir") === "rtl") {
    document.body.setAttribute("dir", "ltr");
  } else {
    document.body.setAttribute("dir", "rtl");
  }
});