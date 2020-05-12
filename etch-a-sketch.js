//Initialize all variables
const container = document.querySelector("#container");
const colorContainer = document.querySelector("#colorContainer")
const colorModeContainer = document.querySelector("#colorModeContainer")
const colorSetContainer = document.querySelector("#colorSetContainer")


const standardColorSetBtn = document.querySelector("#standardColorSetBtn")
const warmColorSetBtn = document.querySelector("#warmColorSetBtn")
const coolColorSetBtn = document.querySelector("#coolColorSetBtn")

const singleBtn = document.querySelector("#singleBtn");
const colorRangeBtn = document.querySelector("#colorRangeBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const opacityBtn = document.querySelector("#opacityBtn");

const clearBtn = document.querySelector("#clearBtn");//complete
const sizeBtn = document.querySelector("#sizeBtn");//complete
const hoverBtn = document.querySelector("#hoverBtn");
const clickBtn = document.querySelector("#clickBtn");


let colorSet = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white" ]


function makeGrid(length, element) { //makes a grid with a width and height of "length"
  element.style.setProperty('--grid-rows', length);
  element.style.setProperty('--grid-cols', length);
  for (i = 0; i < (length * length); i++) {
    let cell = document.createElement("div");
    element.appendChild(cell).className = "grid-item";
  };
};

function promptGridSize(){
    let gridSize = parseInt(prompt("Enter the value for the size of the grid between 10 and 50" , 16));
    console.log(gridSize);
    if (!Number.isInteger(gridSize)){
        alert("That's not a valid value!")
        return promptGridSize();
    }
    else if (gridSize < 10){
        alert("That number is too small!")
        return promptGridSize();
    }
    else if (gridSize > 50){
        alert("That number is too big!")
        return promptGridSize();
    }
    return gridSize;
}

function setDrawMode(){
    let mouseBehavior = container.dataset.mouseMode 
    container.removeEventListener(container.dataset.previousMouseMode, fillCell)
    container.addEventListener(mouseBehavior, fillCell) 
}

function fillCell(event){
    let drawMode = container.dataset.drawMode;
    let drawColor = container.dataset.drawColor;
    let cell = event.target
    if(!cell.matches(".grid-item")) return;
    if(drawMode === "single"){
        cell.style.backgroundColor = drawColor;
        cell.style.opacity = 1;
    }
    else if(drawMode === "rainbow"){
        container.dataset.drawColor = getRandomColor();
        cell.style.backgroundColor = drawColor;
    }
    else if (drawMode === "colorRange"){
        cell.style.backgroundColor = "green";
    }
    else if (drawMode === "opacity"){
        cell.style.backgroundColor = drawColor;
        let opacity = cell.style.opacity;
        cell.style.opacity = opacity ? (parseFloat(opacity) + 0.2) : 0.2;
    }
    
}

function removeAllChildren(parentNode){
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.lastChild);
    }
}

function resetBackgroundColor(){
    const divContainer = container.querySelectorAll("div");
    divContainer.forEach(div=>{
        div.style.opacity = null;
        div.style.backgroundColor = "white";
    })
    
}

function setNewGridSize(){
    removeAllChildren(container)
    makeGrid(promptGridSize(), container)
    setDrawMode()
}
function getRandomColor() { //produces a random color
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function setRainbowDrawMode(){
    container.dataset.drawMode = "rainbow";
    setDrawMode();
}
function setSingleDrawMode(){
    container.dataset.drawMode = "single";
    setDrawMode();
}
function setOpacityDrawMode(){
    container.dataset.drawMode = "opacity"
    setDrawMode();
}
function setHoverMouseMode(){
    hoverBtn.classList.add("activeButton")
    clickBtn.classList.remove("activeButton")
    container.dataset.previousMouseMode = container.dataset.mouseMode
    container.dataset.mouseMode = "mouseover"
    setDrawMode();
}


function setMouseDownMouseMode(){
    clickBtn.classList.add("activeButton")
    hoverBtn.classList.remove("activeButton")
    container.dataset.previousMouseMode = container.dataset.mouseMode
    container.dataset.mouseMode = "mousedown"
    setDrawMode();
}

function setColorMode(event){
let target = event.target
let drawMode = event.target.dataset.drawMode
const colorModeButtonList = colorModeContainer.querySelectorAll("button")
if (!target.matches("button")) return;

else if (drawMode === "single"){
    setSingleDrawMode()
}
else if (drawMode === "colorRange"){
    alert("fuck you")
}
else if (drawMode === "rainbow"){
    setRainbowDrawMode()
}
else if (drawMode === "opacity"){
    setOpacityDrawMode()
}
Array.from(colorModeButtonList).forEach(button => button.classList.remove("activeButton" ));
target.classList.add("activeButton")
}

function setColorSet(event){
    let target = event.target
    let colorSet = event.target.dataset.colorSet
    const colorSetButtonList = colorSetContainer.querySelectorAll("button")
    if (!target.matches("button")) return;
    
    else if (colorSet === "standard"){
        console.log("standard")
    }
    else if (colorSet === "warm"){
        console.log("warm")
    }
    else if (colorSet === "cool"){
        console.log("cool")
    }
    Array.from(colorSetButtonList).forEach(button => button.classList.remove("activeButton" ));
    target.classList.add("activeButton")
    }


clearBtn.addEventListener("click", resetBackgroundColor)
sizeBtn.addEventListener("click", setNewGridSize)

hoverBtn.addEventListener("click", setHoverMouseMode)
clickBtn.addEventListener("click", setMouseDownMouseMode)


colorModeContainer.addEventListener("click", setColorMode)
colorSetContainer.addEventListener("click", setColorSet)


       
makeGrid(16, container);
setDrawMode();
