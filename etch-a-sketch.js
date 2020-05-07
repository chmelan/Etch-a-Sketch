//Initialize all variables
const container = document.querySelector("#container");
const colorContainer = document.querySelector("#colorContainer")
const color1Btn = document.querySelector("#color1");
const color2Btn = document.querySelector("#color2");
const color3Btn = document.querySelector("#color3");
const color4Btn = document.querySelector("#color4");
const color5Btn = document.querySelector("#color5");
const color6Btn = document.querySelector("#color6");
const color7Btn = document.querySelector("#color7");
const color8Btn = document.querySelector("#color8");
const color9Btn = document.querySelector("#color9");
const color10btn = document.querySelector("#color10");

const standardColorSetBtn = document.querySelector("#standardColorSetBtn")
const warmColorSetBtn = document.querySelector("#warmColorSetBtn")
const coolColorSetBtn = document.querySelector("#coolColorSetBtn")

const singleBtn = document.querySelector("#singleBtn");
const aestheticRainbowBtn = document.querySelector("#aestheticRainbowBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");

const clearBtn = document.querySelector("#clearBtn");//complete
const sizeBtn = document.querySelector("#sizeBtn");//complete
let drawColor = "red";
let mouseMode = "mouseover";

let colorSet = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white" ]


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
    setDrawMode(drawColor); //allows for drawing on newly created divs
    });
}

function setDrawMode(mouseMode, drawFunction, color){
const divContainer = container.querySelectorAll("div");
divContainer.forEach(div=>{;
    div.addEventListener(mouseMode, (e) =>{;
        drawFunction(div, color);
        e.stopPropagation();
    });
});
}

function removeAllEventListeners(element, eventType){
element.removeEventListener(eventType, (singleDrawFunction));
element.removeEventListener(eventType, greyScaleDrawFunction);
element.removeEventListener(eventType, aestheticRainbowDrawFunction);
element.removeEventListener(eventType, rainbowDrawFunction);
}

function singleDrawFunction(element, color){
    return element.style.backgroundColor = color;
}
function greyScaleDrawFunction(element, color){
    element.style.backgroundColor = color;
    let opacity = element.style.opacity;
        element.style.opacity = opacity ? (parseFloat(opacity) + 0.1) : 0.1;
}
function rainbowDrawFunction(element){
    element.style.backgroundColor = getRandomColor();
}
function aestheticRainbowDrawFunction(element){
    element.style.backgroundColor = getAestheticRainbowColor();
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

function enableClearButton(){
    clearBtn.addEventListener("click", (e) => {
        resetBackgroundColor();
    });
};
function enableSingleButton(){
    singleBtn.addEventListener("click", (e)=>{
    setDrawMode(mouseMode, singleDrawFunction, drawColor);
    })
}


function enableRainbowButton(){
    rainbowBtn.addEventListener("click", (e)=>{
    setDrawMode(mouseMode, rainbowDrawFunction);
    })
}
function enableAestheticRainbowButton(){
    aestheticRainbowBtn.addEventListener("click", (e)=>{
        setDrawMode(mouseMode, aestheticRainbowDrawFunction);
    })
}
function getRandomColor() { //produces a random color
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function getAestheticRainbowColor(){
    switch(Math.floor(Math.random()*8)){
        case 0: 
            return colorSet[0];
            break;
        case 1: 
            return colorSet[1];
            break;
        case 2: 
            return colorSet[2];
            break;
        case 3: 
            return colorSet[3];
            break;
        case 4: 
            return colorSet[4];
            break;
        case 5:
            return colorSet[5];
            break;
        case 6:
            return colorSet[6];
            break;
        case 7: 
            return colorSet[7];
            break;
    }
    
}

function updateColorPickerButtons(){// changes color of buttons, and adda na event listener that changes the draw color per button
const colorPickerContainer = colorContainer.querySelectorAll("div")
let i = 0
colorPickerContainer.forEach(div=>{
    let color = colorSet[i];
    div.style.backgroundColor = color;
    div.addEventListener("click", (e)=>{;
        setDrawMode(mouseMode, singleDrawFunction, color);
        drawColor = color;
    });
    i++;
});
};

function enableWarmColorSetButton(){
warmColorSetBtn.addEventListener("click", (e)=>{
colorSet = ["DarkRed", "red", "OrangeRed", "orange", "yellow", "gold", "coral", "brown", "black", "white"];
updateColorPickerButtons();
setDrawMode(mouseMode, singleDrawFunction, colorSet[0]);
});
};
function enableCoolColorSetButton(){
    coolColorSetBtn.addEventListener("click", (e)=>{
    colorSet = ["purple", "BlueViolet", "blue", "CornflowerBlue", "Aquamarine", "green", "DarkSeaGreen", "DarkGreen", "black", "white"];
    updateColorPickerButtons();
    setDrawMode(mouseMode, singleDrawFunction, colorSet[0]);
    });
};
    
function enableStandardColorSetButton(){
    standardColorSetBtn.addEventListener("click", (e)=>{
        colorSet = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white" ];
        updateColorPickerButtons();
        setDrawMode(mouseMode, singleDrawFunction, colorSet[0]);
    });
};
       
makeGrid(16);
setDrawMode("mouseover", singleDrawFunction, drawColor);
changeGridSize();
enableStandardColorSetButton();
enableWarmColorSetButton();
enableCoolColorSetButton();
enableClearButton();
enableSingleButton();
enableRainbowButton();
enableAestheticRainbowButton();
updateColorPickerButtons();
