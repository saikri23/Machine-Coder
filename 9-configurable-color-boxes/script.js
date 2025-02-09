const boxConfig = [
  { color: "red", width: "33.33%" },
  { color: "green", width: "33.33%" },
  { color: "blue", width: "33.33%" },
  { color: "yellow", width: "50%" },
  { color: "orange", width: "50%" },
  { color: "purple", width: "70%" },
  { color: "pink", width: "30%" },
  { color: "blue", width: "20%" },
  { color: "yellow", width: "20%" },
  { color: "orange", width: "20%" },
  { color: "purple", width: "20%" },
  { color: "pink", width: "20%" },
];

const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

function reRender() {
  container.innerHTML = "";
  boxConfig.forEach((config) => {
    const box = document.createElement("div");
    box.className = "box";
    box.style.width = config.width;
    box.style.backgroundColor = config.color;
    container.appendChild(box);
  });
}

container.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.className === "box") {
    let index = Array.from(container.children).indexOf(clickedElement);
    let config = boxConfig[index];
    alert(`Box color is ${config.color}`);
  }
});

const formContainer = document.getElementById("input-form");
reRender();

formContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  let color = document.querySelector(".input-color").value;
  let width = document.querySelector(".input-width").value;
  width = width ? `${width}%` : "100%";
  boxConfig.push({ color, width });
  reRender();
});
