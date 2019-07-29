
jumboland.innerHTML += ` 
	<div id="instructionBox">
		<h1>Learn How to Code!<br></h1>
		<p id="par"><small>Disclaimer: This might be boring if you already know how to code.</small><br>
		This is Byubo. Byubo knows how to move left, right, up and down but it needs you 
		to give instructions for it to be able to move. In coding, this instructions are called 
		functions and is always written with a () at the end. For example, Byubo knows a function called 
		"moveRight()". Notice how the function is written. Functions are strict, make sure to type them correctly.Now, let's see what it does and give it a try! 
		Type moveRight(), moveLeft(), moveUp(), or moveDown() in the text box and click the Run Code Button below.
		If you are done experimenting the functions, click 'next'.</p>
		<textarea id="textCodeArea" rows="10" cols="50"></textarea><br>
		<button id="runBtn" class="btn btn-success">Run Code</button>
		<a href="#" class="previous">&laquo; Previous</a>
		<a href="#" class="next" data-id="">Next &raquo;</a>
	</div>

	<div id="gameCanvas">

		<div id="spiderPart">
			<div class="spiderPartDiv">
			<img src="assets/images/spider.png" id="spider">
			</div>
		</div>
		<div id="spiderFood"></div>
	</div>
	<p id="demo"></p>
`;



spiderFood.innerHTML += `
	<div class="spiderFoodDiv"><img src="assets/images/ant.png" id="ant"></div>
	`;

let nextBtn = document.querySelector(".next");
let newInput;
runBtn.addEventListener("click", function() {
	newInput = textCodeArea.value;
	let array = newInput.trim().split(")")
	
	array.forEach( function(statement) {
		console.log(statement);
		if(statement.trim() == "moveLeft(") {
			moveLeft();
		} if(statement.trim() == "moveUp(") {
			moveUp();
		} if(statement.trim() == "moveDown(") {
			moveDown();
		} if(statement.trim() == "moveRight(") {
			moveRight();
		} if(statement.trim() == "collectAnt(") {
			collectAnt();
		} 
		runBtn.disabled = true;
		nextBtn.style.display = 'inline-block'
	});
	textCodeArea.addEventListener("focus", function() {
		textCodeArea.value = ""
		runBtn.disabled = false;
	});
});

nextBtn.addEventListener("click", function() {
	runBtn.disabled = false;
	par.innerHTML = `<small>Disclaimer: This has some bugs. Please bear with it first.</small><br>
					Great! You learned how to call a function. Now, Byubo needs to collect its food. You can help it by moving 
					it until it reaches the ant then call the function collectAnt(). 
					You can type several functions before hitting the Run Code Button. For example:<br>
					moveDown()<br>
					moveRight()<br>
					moveRight()<br>
					Let's give it a try!`;
});


function moveRight() {

	if(spiderPart.style.left) {
		if(spiderPart.style.left >= '345px') {
			spiderPart.style.left = '190px';	
		}
		spiderPart.style.left = parseInt(spiderPart.style.left) + 155 +'px';
		console.log(spiderPart.style.left)
	} 
	else {
		spiderPart.style.left = '190px';
		// alert("wrong code");
	}	
}

function moveLeft() {
	if (spiderPart.style.left) {
		if(spiderPart.style.left <= '-35px') {
			
			spiderPart.style.left = '190px'
		}
		spiderPart.style.left = parseInt(spiderPart.style.left) - 155 +'px';
		console.log(spiderPart.style.left)
	} else {
		// alert("wrong code");
	}
}
function moveUp() {
	if(spiderPart.style.top) {
		if(spiderPart.style.top <= '-35px' ) {
			spiderPart.style.top = '190px';
		}
		spiderPart.style.top = parseInt(spiderPart.style.top) - 155 +'px';
		console.log(spiderPart.style.top)
				
	} else {
		// alert("wrong code");

	}
}

function moveDown() {
	if(spiderPart.style.top) {
		if(spiderPart.style.top >= '345px') {
			
			spiderPart.style.top = '190px'
		}
		spiderPart.style.top = parseInt(spiderPart.style.top) + 155 +'px';
		console.log(spiderPart.style.top)
		
	} else {
		// alert("wrong code");
		spiderPart.style.top = '190px';
	}
}

function collectAnt() {
	let spider1 = document.querySelector(".spiderPartDiv")
	let food = document.querySelector(".spiderFoodDiv");
	if(spider1.style.left.clientX === food.style.left.clientX) {
		food.remove();
		alert("Good job! That's all for today. You need to wait for the next version to learn more :p")
	}
}

gameCanvas.addEventListener("click", showCoords) 

function showCoords(event) {
  let x = event.clientX;
  let y = event.clientY;
  let coords =  x + y;
  if (coords) {
  	return coords
  }
}



