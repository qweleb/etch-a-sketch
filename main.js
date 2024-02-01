// * Blackboard container established
const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.backgroundColor = "black";
container.style.flex = 1;
container.style.height = "500px";
container.style.width = "500px";


// * Function to create a drawable-grid of variable size
function createGrid(size) {
    // ! Grid has a max resolution of 100x100
    if (size <= 100) {
        // * Recursive generation of row, adding flex properties and
        // * appending to blackboard
        for (let r = 0; r < size; r++) {
            let row = document.createElement("div");
            row.style.display = "flex";
            row.style.flex = 1;
            container.appendChild(row);
            // * Recursive generation of cells arranged in a column
            // * inside each row.
            for (let c = 0; c < size; c++) {
                let cell = document.createElement("div");
                // * Cell styling
                cell.setAttribute('id', 'cell')
                cell.style.display = "flex";
                cell.style.flex = 1;
                //* Code to change 'pen-colour' on mouseover
                cell.onmouseover = () => {
                    cell.style.backgroundColor = "white";
                }
                row.appendChild(cell);
            }
        }
    // ! Ensures maximum resolution is 100x100 to reduce chance
    // ! of crash    
    } else createGrid(100);

}


// * Reset button
const reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    // * Creates prompt to establish grid's square value.
    createGrid(prompt("How big? X * X"))
})





