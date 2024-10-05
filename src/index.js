import "./styles.css";
import { createAbout } from "./about";
import { createHome } from "./home";
import { createMenu } from "./menu";

const container = document.getElementById("content");
const about = document.getElementById("aboutBttn");
const menu = document.getElementById("menuBttn");
const home = document.getElementById("homeBttn")


about.addEventListener("click", () => {
    container.innerHTML = ""
    menu.classList.remove("tab-clicked");
    home.classList.remove("tab-clicked")
    about.classList.add("tab-clicked")
    createAbout();

})

menu.addEventListener("click", () => {
    container.innerHTML = "";
    home.classList.remove("tab-clicked");
    about.classList.remove("tab-clicked")
    menu.classList.add("tab-clicked");
    createMenu();
    

})

home.addEventListener("click", () => {
    container.innerHTML = "";
    menu.classList.remove("tab-clicked");
    about.classList.remove("tab-clicked")
    home.classList.add("tab-clicked");
    createHome();
    

})

createHome();
