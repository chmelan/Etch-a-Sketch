//Initialize all variables
const container = document.querySelector("#container");
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
const greyScaleBtn = document.querySelector("#greyScaleBtn");
const aestheticRainbowBtn = document.querySelector("#aestheticRainbowBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");

const clearBtn = document.querySelector("#clearBtn");//complete
const sizeBtn = document.querySelector("#sizeBtn");//complete
let drawColor = "black"

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
    enableDrawOnMouseover(drawColor); //allows for drawing on newly created divs
    });
}

function enableDrawOnMouseover(drawColor){
const divContainer = container.querySelectorAll("div");
divContainer.forEach(div=>{;
    div.addEventListener("mouseover", (e) =>{;
        if (drawColor == "rainbow"){
            div.style.backgroundColor = getRandomColor();
            e.stopPropagation(); //stops propegation upwards
        }
        else if (drawColor == "greyScale"){
            div.style.backgroundColor = "grey";
        }
        else if (drawColor == "aestheticRainbow"){
            div.style.backgroundColor = getAestheticRainbowColor();
        }
        else{
            div.style.backgroundColor = drawColor;
        }
    });
});
}

function removeAllChildren(parentNode){
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.lastChild);
    }
}

function resetBackgroundColor(){
    const divContainer = container.querySelectorAll("div");
    divContainer.forEach(div=>{
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
    enableDrawOnMouseover("black");
    })
}

function enableGreyScaleButton(){
    greyScaleBtn.addEventListener("click", (e)=>{
    enableDrawOnMouseover("greyScale");
    })
}

function enableRainbowButton(){
    rainbowBtn.addEventListener("click", (e)=>{
    enableDrawOnMouseover("rainbow");
    })
}
function enableAestheticRainbowButton(){
    aestheticRainbowBtn.addEventListener("click", (e)=>{
        enableDrawOnMouseover("aestheticRainbow");
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
makeGrid(16);
enableDrawOnMouseover(drawColor);
changeGridSize();
enableClearButton();
enableSingleButton();
enableGreyScaleButton();
enableRainbowButton();
enableAestheticRainbowButton();
