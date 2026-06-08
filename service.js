// RTL

const rtlBtn = document.getElementById("rtl-toggle");

rtlBtn.addEventListener("click", () => {

    if(document.documentElement.dir === "rtl"){
        document.documentElement.dir = "ltr";
    }else{
        document.documentElement.dir = "rtl";
    }

});
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});

window.addEventListener("load", () => {
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark");
    }
});
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