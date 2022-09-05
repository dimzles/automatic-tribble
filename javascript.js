const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button')
const createButton = document.getElementById('create-grid')
let grid = document.getElementById('grid');

createButton.addEventListener('click', () => {
    promptGridSize();
})

function promptGridSize() {
    answer = prompt('How big do you want the grid?');
    if(isNaN(answer) || answer > 100 || answer === null) {
        alert('Invalid');
    } else createGrid(answer);
}

function createGrid(numberOfRows) {
    resetGrid();
    let size = numberOfRows;
    let gridTemplateColumns = 'repeat(' + size + ', minmax(0,1fr))';
    grid.style.gridTemplateColumns = gridTemplateColumns;
    grid.style.gridTemplateRows = gridTemplateColumns;
    
    //for loop to dynamically create grid size
    for (let i = 0; i < size; ++i) {
        let column = document.createElement('div');
        column.className = 'column';
        for (let j = 0; j < size; ++j) {
            let row = document.createElement('div');
            row.className = 'row';
            column.appendChild(row);
        }
        grid.appendChild(column);
        grid.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'red';
        })
    }
    container.appendChild(grid);
}



//function to reset grid colour
function resetGrid() {
    cells = document.querySelectorAll('div');
    cells.forEach(cell => cell.style.backgroundColor = "white");
}

resetButton.addEventListener('click', () => {
    resetGrid();
})
