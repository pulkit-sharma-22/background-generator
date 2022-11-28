var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


//Make the Random Button
var random_button = document.createElement("button");
random_button.innerHTML = "RANDOMIZE";
random_button.classList.add("rand_btn");
body.appendChild(random_button)

//Set the BG gradient to the color the user picks in the inputs
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	
	css.textContent = body.style.background + ";"; //put the values made above in the h3
	random_button.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
}

//Run the function on page load
setGradient();

//Create random hex numbers and set body bg color gradient to the newly generated hex numbers
function random_hex() {
	var c1 = "#" + Math.random().toString(16).substring(2, 8);
	var c2 = "#" + Math.random().toString(16).substring(2, 8);

	color1.value = c1;
	color2.value = c2;

	setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

random_button.addEventListener("click", random_hex);