const sideBar = document.querySelector(".nav-links");
const openMenu = document.querySelector(".hamburger-icon");

openMenu.addEventListener("click", () => {
    if(sideBar.style.display === "flex") {
        sideBar.style.display = "none";
        openMenu.src = "/assets/images/icon-menu.svg"
    } else {
        sideBar.style.display = "flex";
        openMenu.src = "/assets/images/icon-menu-close.svg";
    }
});