//your JS code here. If required.
let mainDIV = document.querySelector(".container");

// create 800 boxes
let total = 800;

for (let i = 0; i < total; i++) {
  let square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = changeTOcolor();
  });

  square.addEventListener("mouseleave", () => {
    setTimeout(() => {
      square.style.backgroundColor = "pink"; // ✅ fixed
    }, 1000);
  });

  mainDIV.appendChild(square);
}

function changeTOcolor() {
  let chars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}
















