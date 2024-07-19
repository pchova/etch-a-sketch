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
    let userNum = prompt("Please type a number to make a new grid!");

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    
    while (userNum > 100 || userNum <= 0 || isNaN(userNum)) {
        if (isNaN(userNum)) {
            while (isNaN(userNum)) {
                userNum = prompt("No special characters or letters. Please type a number.");
            }
        } 
        
        if (userNum > 100 || userNum <= 0) {
            while (userNum > 100 || userNum <= 0) {
                userNum = prompt("Please type a number between 1-100.");
            }
        }
    }

    if (userNum <= 100 && userNum > 0) {
        createDiv(userNum);
    }
});

/* CLASSES */
function createDiv(x) {
    let divs = x*x;

    for (let i = 1; i <= divs; i++) {
        const newDiv = document.createElement('div');
        //newDiv.textContent = i;
        newDiv.setAttribute('class', 'divStyle');
        container.appendChild(newDiv);
    }
}

createDiv(numOfDivs);