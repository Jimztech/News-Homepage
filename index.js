const sideBar = document.querySelector(".side-bar");
const openMenu = document.querySelector(".open-icon");
const closeMenu = document.querySelector(".close-icon");

openMenu.addEventListener("click", () => {
    sideBar.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
    sideBar.style.display = "none";
});