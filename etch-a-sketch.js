
const container = document.querySelector("#container");

const blackBtn = document.querySelector("#blackBtn");
const greyScaleBtn = document.querySelector("#greyScaleBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const warmBtn = document.querySelector("#warmBtn");
const coolBtn = document.querySelector("#coolBtn");
const clearBtn = document.querySelector("#clearBtn");
const sizeBtn = document.querySelector("#sizeBtn");//complete
let drawColor = "black"




function makeGrid(length) { //makes a grid with a width and height of "length"
  container.style.setProperty('--grid-rows', length);
  container.style.setProperty('--grid-cols', length);
  for (i = 0; i < (length * length); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

function promptGridSize(){
    return parseInt(prompt("Enter the value for the size of the grid" , 16));
}

function changeGridSize(){ //allows the user to change the grid size
sizeBtn.addEventListener("click", (e)=>{
    removeAllChildren(container); // removes old divs
    makeGrid(promptGridSize()); // creates a new grid size with a user prompt
    enableDrawOnMouseover(drawColor); //allows for drawing on newly created divs
    });
}

function enableDrawOnMouseover(drawColor){
const divContainer = container.querySelectorAll("div");
divContainer.forEach(div=>{;
    div.addEventListener("mouseover", (e) =>{;
        div.className = "";
        div.classList.add(drawColor);
        e.stopPropagation(); //stops propegation upwards
    });
});
}
function removeAllChildren(parentNode){
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.lastChild);
    }
}

function resetCellClass(){
    const divContainer = container.querySelectorAll("div");
    divContainer.forEach(div=>{
        //div.className = "";
        div.className = "grid-item";
    })
    
}
function enableClearButton(){
    clearBtn.addEventListener("click", (e) => {
        resetCellClass();
    });
};

makeGrid(16);
enableDrawOnMouseover(drawColor);
changeGridSize();
enableClearButton();