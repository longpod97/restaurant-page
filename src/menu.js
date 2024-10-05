import { createElement } from "./elementFactory";

function createMenu () {
    const main = document.getElementById("content")
    const title = createElement("div", "The Rustic Sandwich Menu", "class", "menu-title", main)
    const menu = createElement("div", "", "class", "menu", main)
    const container1 = createElement("div", "", "", "", menu);
    const container2 = createElement("div", "", "", "", menu)
    createElement("div", "The Rustic Rooster..........", "", "", container1);
    createElement("div", "The Brilliant Beef..........", "", "", container1);
    createElement("div", "The Luxurious Lamb..........", "", "", container1);
    createElement("div", "The Fanciful Fish..........", "", "", container1);
    createElement("div", "The Vibrant Veggie..........", "", "", container1);
    createElement("div", "..........$10", "", "", container2);
    createElement("div", "..........$15", "", "", container2);
    createElement("div", "..........$12", "", "", container2);
    createElement("div", "..........$12", "", "", container2);
    createElement("div", "..........$8", "", "", container2);

    return menu
}

export {createMenu}