
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");



btn.addEventListener("click", function (){
	let num = document.querySelector("#grade");
                
	num = Number(num.value);


	if (num >= 80 && num <= 100) {
		result.innerHTML = "A+";
	}else if (num >= 70 && num < 80) {
		result.innerHTML = "A";
	}else if (num >= 60 && num < 70) {
		result.innerHTML = "A-";
	}else if (num >= 50 && num < 60) {
		result.innerHTML = "B";
	}else if (num >= 40 && num < 50) {
		result.innerHTML = "C";
	}else if (num >= 33 && num < 40) {
		result.innerHTML = "D";
	}else if (num >= 0 && num < 33) {
		result.innerHTML = "F";
	}else {
		result.innerHTML = 'invalid result';
	}

});