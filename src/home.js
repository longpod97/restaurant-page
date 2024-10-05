import { createElement } from "./elementFactory";

function createHome () {
    const main = document.getElementById("content")
    createElement("div", "Welcome to The Rustic Sandwich, where we bring fresh, locally-sourced ingredients to your plate with a modern twist on classic flavors. Whether you're here for a quick bite or a special occasion, our cozy atmosphere and delicious menu are sure to satisfy", "class", "home tab-clicked", main)
}

export {createHome}