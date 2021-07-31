var button = document.getElementById("enter");
// referencing and storing my button by selecting the elements id
var input = document.getElementById("userinput")
// referencing my input field so I can add what is typed into it onto my list later
var ul = document.querySelector("ul");
// referencing the ul so that I know where I want to store the new data from my input
// field after pressing a enter or clicking the button

function inputLength() {
	return input.value.length;
}
// creating a function decleration that returns the value of my input fields text length

function createListElement() {
	var li = document.createElement("li");
	// create an li element and stores it in the var li
	li.appendChild(document.createTextNode(input.value));
	// create text from the value that was typed
	ul.appendChild(li);
	// append li that was created to the ul
	input.value = "";
	// reset the value of input once the text has been created
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
// this is a fail safe so I can't just add an empty string to the list

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
// this is so that I can use the enter key as well as clicking the enter button

button.addEventListener("click", addListAfterClick);
// this finalizes everything I have worked for and looks for a click event then running the function for click
input.addEventListener("keypress", addListAfterKeypress);
// this looks for a keypress of 13 form the enter key and runs the keypress function