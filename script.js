const container = document.querySelector('.container');

//set defualt parameters
const xDimensionHtml = document.getElementById('widthDimension');
const yDimensionHtml = document.getElementById('heightDimension');
let xDimension = xDimensionHtml.valueAsNumber = 16;
let yDimension = yDimensionHtml.valueAsNumber = 16;

let gridWidth = 30*xDimension;
let gridHeight = 30*yDimension;

let pixelWidth = 30;
let pixelHeight = 30;

container.setAttribute('style',`width: ${gridWidth}px; height: ${gridHeight}px;`);

function createBlocks(){
    for(let i = 0; i < xDimension * yDimension; i++){
        const div = document.createElement('div');
        div.classList.add(i);
        div.setAttribute('style',`outline: 2px black solid; background-color: brown; width: ${pixelWidth}px; height: ${pixelHeight}px;`);
        container.appendChild(div);
    }
}

function deleteBlocks(){
    const blocks = Array.from(document.querySelectorAll('div.container div'));
    blocks.forEach(element => element.remove());
}


function adjustGrid(){
    xDimension = xDimensionHtml.valueAsNumber;
    yDimension = yDimensionHtml.valueAsNumber;
    container.setAttribute('style',`width: ${30*xDimension}px; height: ${30*yDimension}px;`);
}

function drawing(element){
    if(element.ctrlKey){
        element.target.style.backgroundColor = 'brown';
    }
    else{
        element.target.style.backgroundColor = 'green';
    }
    element.stopPropagation();
}

function checkChange(){
    
    if(xDimension !== xDimensionHtml.valueAsNumber || yDimension !== yDimensionHtml.valueAsNumber){
        deleteBlocks();
        adjustGrid();
        createBlocks();
    }
}

function program(element){
    drawing(element);
}

    createBlocks();
    const div = Array.from(document.querySelectorAll('div'));
    div.forEach(element => element.addEventListener("mouseover", program));

    const input = Array.from(document.querySelectorAll('input'));
    input.forEach(element => element.addEventListener("click", checkChange));




