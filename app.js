/* VARIABLES */
let numOfDivs = 16;

/* SELECTORS */
const container = document.querySelector(".container");

const btnContainer = document.querySelector("#gridBtn");
const btn = document.createElement("button");
btn.textContent = "NEW GRID";
btn.classList.add("newGridBtn");
btnContainer.appendChild(btn);

/* EVENT LISTENERS */
btn.addEventListener("click", () => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    let userNum = prompt("Please type a number to make a new grid!");

    createDiv(userNum);
    
});

/* CLASSES */
function createDiv(x) {
    let divs = x;

    for (let i = 1; i <= divs; i++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = i;
        newDiv.setAttribute('class', 'divStyle');
        container.appendChild(newDiv);
    }
}

createDiv(numOfDivs);