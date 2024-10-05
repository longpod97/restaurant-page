export function createElement (tag, text, attribute, value, appendTo) {
    
    const element = document.createElement(tag);
     if (text) {
        element.textContent = text;
     }

     if (attribute) {
        element.setAttribute(attribute, value)
     }

     if (appendTo) {
        appendTo.appendChild(element)
     }

     return element
}