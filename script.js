const container = document.querySelector('.container');


const xDimensionHtml = document.getElementById('widthDimension');
const yDimensionHtml = document.getElementById('heightDimension');
let xDimension = xDimensionHtml.valueAsNumber = 16;
let yDimension = yDimensionHtml.valueAsNumber = 16;

let gridWidth = 30*xDimension;
let gridHeight = 30*yDimension;

container.setAttribute('style',`background-color: red; width: ${gridWidth}px; height: ${gridHeight}px;`);

let pixelWidth = gridWidth / xDimension;
let pixelHeight = gridHeight /yDimension;

function createGrid(){
    for(let i = 0; i < xDimension * yDimension; i++){
        const div = document.createElement('div');
        div.classList.add(i);
        div.setAttribute('style',`outline: 2px black solid; background-color: blue; width: ${pixelWidth}px; height: ${pixelHeight}px;`);
        container.appendChild(div);
    }
}

function deleteGrid(){
    const blocks = Array.from(document.querySelectorAll('div.container div'));
    blocks.forEach(element => element.remove());
}


function adjustGrid(){
    xDimension = xDimensionHtml.valueAsNumber;
    yDimension = yDimensionHtml.valueAsNumber;
    container.setAttribute('style',`background-color: red; width: ${30*xDimension}px; height: ${30*yDimension}px;`);
}

function drawing(element){
    if(element.target.style.backgroundColor === 'black'){
        element.target.style.backgroundColor = 'pink';
    }
    else{
        element.target.style.backgroundColor = 'black';
    }
    element.stopPropagation();
}

    createGrid();
    const div = Array.from(document.querySelectorAll('div'));
    div.forEach(element => element.addEventListener("mouseover", drawing));




