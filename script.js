const container = document.createElement("div");
container.classList.add("container");

const body = document.querySelector("body");

body.appendChild(container);

const squares = 4;

for (let x = 0; x < squares*squares; x++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${100/squares}%`;
    square.style.height = `${100/squares}%`;
    container.appendChild(square);
}