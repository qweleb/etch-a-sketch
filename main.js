const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.backgroundColor = "black";
container.style.flex = 1;
container.style.height = "500px";
container.style.width = "500px";


function createGrid(size) {
    if (size <= 100) {
        for (let r = 0; r < size; r++) {
            let row = document.createElement("div");
            row.style.display = "flex";
            row.style.flex = 1;
            container.appendChild(row);
            for (let c = 0; c < size; c++) {
                let cell = document.createElement("div");
                cell.setAttribute('id', 'cell')
                cell.style.display = "flex";
                cell.style.flex = 1;
                cell.onmouseover = () => {
                    cell.style.backgroundColor = "white";
                }
                row.appendChild(cell);
            }
        }
    } else createGrid(100);

}

const reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    createGrid(prompt("How big? X * X"))
})





