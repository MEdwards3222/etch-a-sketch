const gridContainer = document.querySelector("#gridContainer");


window.addEventListener("load", setDefaultGrid);


function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList = "grid-div";
    gridElement.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridElement);
  }
}

function changeColor() {

};