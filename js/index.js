var currentSettings = {
    brushColor: "black",
    canvasSize: 16,
}

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
                paintCell(cell,currentSettings.brushColor);
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


function changeSize(){
    event.preventDefault();

    var newSize = document.querySelector('input[name="pad-size"]:checked');

    currentSettings.canvasSize = parseInt(newSize.value,10);

    const cellContainer = document.getElementById('drawing-pad');

    cellContainer.innerHTML="";

    createCanvas(currentSettings.canvasSize,currentSettings.canvasSize,currentSettings.brushColor);    

    return true;

}

function changeColor(){
    event.preventDefault();

    var random = document.querySelector('input[name="random"]:checked');

    if(random!==null){
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        currentSettings.brushColor = randomColor;
    }else{
        var newColor = document.querySelector('input[name="brush-color"]');
        currentSettings.brushColor = newColor.value;
    }


}

createCanvas(currentSettings.canvasSize,currentSettings.canvasSize,currentSettings.brushColor)
