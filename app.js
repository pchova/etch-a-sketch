/* VARIABLES */
let numOfDivs = 16;

/* SELECTORS */
const container = document.querySelector(".container");

/* CLASSES */
function createDiv() {
    for (let i = 1; i <= numOfDivs; i++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = i;
        newDiv.setAttribute('class', 'divStyle');
        container.appendChild(newDiv);
    }
}

createDiv();