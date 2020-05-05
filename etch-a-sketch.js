
const container = document.querySelector("#container");

function makeGrid(length) {
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

function changeGridSize(){ //allows the user to change the griz size
const sizeButton = document.querySelector("#sizeBtn")
sizeButton.addEventListener("click", (e)=>{
    removeAllChildren(container); // removes old divs
    makeGrid(promptGridSize()); // creates a new grid size with a user prompt
    enableChangeOnMouseover(); //allows for drawing on newly created divs
    });
}

function enableChangeOnMouseover(){
const divContainer = container.querySelectorAll("div");
divContainer.forEach(div=>{;
    div.addEventListener("mouseover", (e) =>{;
        div.classList.add("black");
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
        div.className = "grid-item"
    })
    
}

makeGrid(16);
enableChangeOnMouseover();
changeGridSize();