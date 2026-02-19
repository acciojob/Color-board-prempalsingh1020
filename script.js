const container = document.querySelector(".container");

for (let i = 0; i < 800; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = getRandomColor();
  });

  square.addEventListener("mouseout", () => {
    setTimeout(() => {
      square.style.backgroundColor = "";
    }, 1000);
  });

  container.appendChild(square);
}

function getRandomColor() {
  const chars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}












