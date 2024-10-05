import { createElement } from "./elementFactory";

function createAbout () {
const main = document.getElementById("content")

createElement("div", "At The Rustic Sandwich, we believe in creating memorable dining experiences. Our chefs are passionate about crafting dishes that highlight the best of seasonal produce, while our team ensures that every visit feels like home. Join us and taste the difference that quality and care bring to every meal.", "class", "about", main)
};

export {createAbout}