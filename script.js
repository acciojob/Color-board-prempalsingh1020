//your JS code here. If required.


let mainDIV = document.querySelector(".container");

//  create 800 boxes;

let s= 800;  // no of the boxes

for(let i=1;i<=s;i++){

	let square = document.querySelector("div");
	square.classList.add("square");

	square.addEventListener("mouseeneter",()=>{

		let color = changeTOcolor()
		square.style.backgroundColor=color;
		
	});

	square.addEventListener("mouseleave",()=>{
		
		setTimeout(()={

			square.style.backgroundColor=black;
			
		},1000);
	})

		mainDIV.appendChild(square);

	
}

function changeTOcolor() {
	let c = "0123456789ABCDFE";
	let s = "#";
	for(let i=0;i<6;i++){
		s += c[Math.floor(Math.random()*16)];
	}
	return s;
}
















