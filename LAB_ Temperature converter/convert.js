function convertCtoF(c) {
    return c * (9 / 5) + 32; //formula for converting to c given f
}

function convertFtoC(f) {
    return (f - 32) * 5 / 9; //formula for converting to f given c
}

function domLoaded() {
    var convertButton = document.getElementById("convertButton");
    var cInput = document.getElementById("cInput");
    var fInput = document.getElementById("fInput");
    var weatherImage = document.getElementById("weatherImage");
    hideImage();//hide image initially
    convertButton.addEventListener("click", convertTemperature);
    cInput.addEventListener("input", () => {
        if (fInput.value.length > 0) {
            fInput.value = "";// to make other input empty when entering value in this
        }
    })
    fInput.addEventListener("input", () => {
        if (cInput.value.length > 0) {
            cInput.value = "";// to make other input empty when entering value in this
        }
    })

    function hideImage() {
        weatherImage.style.display = "none";
    }

}

function convertTemperature() {
    var cInput = document.getElementById("cInput");
    var fInput = document.getElementById("fInput");
    var weatherImage = document.getElementById("weatherImage");
    var errorMessage = document.getElementById("errorMessage");
    if (cInput.value.length > 0) {// if input not empty
        if (checkErrorInput(cInput.value)) {// runs while input is valid
            fInput.value = convertCtoF(parseFloat(cInput.value));
            showImage(parseFloat(fInput.value));// To show respective pngs
        }
    } else if (fInput.value.length > 0) { // if input not empty
        if (checkErrorInput(fInput.value)) { // runs while input is valid
            cInput.value = convertFtoC(parseFloat(fInput.value));
            showImage(parseFloat(fInput.value));// To show respective pngs
        }
    } else {
        errorMessage.innerText = "please enter temperature";
    }

    function checkErrorInput(input) {
        if (isNaN(parseFloat(input))) {
            errorMessage.innerHTML = input + " is not a number";
            return false;  // input is not valid throws error and returns false
        } else {
            errorMessage.innerHTML = "";
            return true;  // valid input
        }
    }

    function showImage(f) {
		
		
		
		
        if (f < 32) {
            weatherImage.src = "cold.png";// set src attribute to cold png
            weatherImage.alt = "cold png";
			weatherImage.style.display = "block";
	}  else if (f >= 32 && f <= 50 ) {
            weatherImage.src = "cool.png";//set src attribute to png
            weatherImage.alt = "cool png";
			weatherImage.style.display = "block";
        } 	else  {
            weatherImage.src = "warm.png"; //set src attribute to png
            weatherImage.alt = "warm png";
			weatherImage.style.display = "block";
        }
        weatherImage.style.display = "block";

    }

}

document.addEventListener("DOMContentLoaded", domLoaded);//run when dom content is loaded
