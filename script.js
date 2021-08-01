var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {

	var li = document.createElement("li");
	var deleteButton = document.createElement("button");

	li.appendChild(document.createTextNode(input.value));
	deleteButton.appendChild(document.createTextNode("completed"));
	
	li.appendChild(deleteButton);
	ul.appendChild(li);

	input.value = "";
	deleteButton.onclick = removeParent;

}

function removeParent(event) {
	event.target.parentNode.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);