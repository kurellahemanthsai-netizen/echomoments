/* DARK MODE */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );
});

/* LOAD SAVED THEME */

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

/* RTL MODE */

const rtlToggle = document.getElementById("rtlToggle");

rtlToggle.addEventListener("click", () => {
    document.body.classList.toggle("rtl");

    localStorage.setItem(
        "rtl",
        document.body.classList.contains("rtl")
        ? "enabled"
        : "disabled"
    );
});

/* LOAD SAVED RTL */

if(localStorage.getItem("rtl") === "enabled"){
    document.body.classList.add("rtl");
}
const menuToggle = document.getElementById("menuToggle");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

/* Close sidebar when clicking outside */

document.addEventListener("click", (e) => {
    if (
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        sidebar.classList.remove("active");
    }
});