/* VARIABLES */
let numOfDivs = 16;

/* SELECTORS */
const container = document.querySelector(".container");

/* CLASSES */
function createDiv() {
    for (let i = 0; i < numOfDivs; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'divStyle');
        container.appendChild(newDiv);
    }
}

createDiv();