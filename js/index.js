console.log('Hello, eugene')

function createCanvas(numRows,numCols,paintcolor) {
    const element = document.getElementById("drawing-pad");
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.style.height = `${100 / numRows}%`;
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.style.width = `${100 / numCols}%`;

            cell.addEventListener("mouseover", () => {
                paintCell(cell,paintcolor);
            });

            row.appendChild(cell);
        }
        element.appendChild(row);
    }
}

function paintCell(cell, color) {
    cell.style.backgroundColor = color;
}

function clearCanvas() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
}

createCanvas(16,16,"rgb(245, 222, 179)");
