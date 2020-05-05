
const container = document.querySelector("#container");

function makeGrid(length) {
  container.style.setProperty('--grid-rows', length);
  container.style.setProperty('--grid-cols', length);
  for (i = 0; i < (length * length); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};



makeGrid(16);

const divContainer = container.querySelectorAll("div");
divContainer.forEach(div=>{;
    div.addEventListener("mouseover", (e) =>{;
        div.classList.add("black");
        e.stopPropagation(); //stops propegation
    });
});
