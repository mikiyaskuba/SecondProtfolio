// Function to update the time display
document.onreadystatechange = function () {
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector(".center").style.visibility = "visible";
	} else {
		document.querySelector("body").style.visibility = "visible";
		document.querySelector(".center").style.visibility = "hidden";
	}
};
function updateTime() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var timeString = hours + ":" + minutes + ":" + seconds;
	document.getElementById("timeDisplay").innerHTML = timeString;
}

// Update the time initially and then every second
updateTime(); // Update initially
setInterval(updateTime, 1000); // Update every second

const textElement = document.getElementById("text");
const words = [
	"I am Addicted to Coding 💻 & Coffee ☕!",
	"i am full-stack  developer",
];
let wordIndex = 0;
let charIndex = 0;

function type() {
	if (charIndex < words[wordIndex].length) {
		textElement.textContent += words[wordIndex].charAt(
			//textElement.textContent=textElement.textContent+words[wordIndex].charAt(index)
			charIndex
		);
		charIndex++;
		setTimeout(type, 100); // Adjust typing speed here
	} else {
		setTimeout(erase, 1500); // Adjust delay before erasing here
	}
}

function erase() {
	if (charIndex > 0) {
		textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
		charIndex--;
		setTimeout(erase, 50); // Adjust erasing speed here
	} else {
		wordIndex++;
		if (wordIndex >= words.length) {
			wordIndex = 0;
		}
		setTimeout(type, 500); // Adjust delay before typing new word here
	}
}

setTimeout(type, 1000);
