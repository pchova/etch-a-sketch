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

    for (let i = 0; i < x; i++) {
        const divCol = document.createElement("div");
        divCol.classList.add("divColStyle");

        for (let i = 0; i < x; i++) {
            const divRow = document.createElement("div");
            divRow.classList.add("divRowStyle");
            divCol.appendChild(divRow);

            divRow.addEventListener("mouseover", () => {
                divRow.style.cssText = "background-color: lightblue;";
            });
        }

        container.appendChild(divCol);
    }
}



createDiv(numOfDivs);






















/* createDiv(x) function attemp #2
const cellSize = (container.offSetWidth - 10) / x;

    for (let i = 0; i < x **2 ; i++) {
        const cell = document.createElement('div');
        cell.textContent = (i+1);
        cell.classList.add('divStyle');
        cell.style.cssText = `width: ${cellSize}px; height: ${cellSize}px;`;
        container.appendChild(cell);
    }
*/

/* createDiv(x) function attempt #1
let divs = x*x;

for (let i = 1; i <= divs; i++) {
    const newDiv = document.createElement('div');
    //newDiv.textContent = i;
    newDiv.setAttribute('class', 'divStyle');
    container.appendChild(newDiv);
} 
*/