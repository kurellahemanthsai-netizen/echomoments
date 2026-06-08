// DARK MODE

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
}

// RTL

const rtlBtn = document.getElementById("rtl-toggle");

rtlBtn.addEventListener("click", () => {

    const currentDir =
        document.documentElement.getAttribute("dir") || "ltr";

    const newDir =
        currentDir === "rtl" ? "ltr" : "rtl";

    document.documentElement.setAttribute("dir", newDir);

    localStorage.setItem("direction", newDir);
});

document.documentElement.setAttribute(
    "dir",
    localStorage.getItem("direction") || "ltr"
);

const savedDirection = localStorage.getItem("direction");

if(savedDirection){
    document.documentElement.dir = savedDirection;
}


const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const nav = document.getElementById("navMenu");
const overlay = document.getElementById("menu-overlay");

hamburger.addEventListener("click", () => {
    nav.classList.add("active");
    overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});