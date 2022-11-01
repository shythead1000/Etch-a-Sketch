let grid = document.querySelector('.grid-container');
let button = document.querySelector('button');

let gridSize = 16;

function hovers(gridSize){
    let square = document.querySelectorAll('.box');
    square.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.classList.add('change');
            item.style.height = `${500/gridSize}`;
        });
    });
};

function removeAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    };
};

function createBoxes(gridSize){
    removeAllChildNodes(grid)
    for(i=0;i<(gridSize*gridSize);i++){
        let box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    };
    hovers(gridSize);
};

function newGrid(gridSize){
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
};

createBoxes(gridSize);
newGrid(gridSize);

button.addEventListener('click', ()=> {
    let input = prompt('Enter desired Grid size:');
    if (input <=100&&input>=1){
        createBoxes(input);
        newGrid(input);
    } else{
        alert('Invalid number. Please pick a number between 1 / 100');
    }
});