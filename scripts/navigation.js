
function addNavButtons() {
	for (var i = 0; i < SECTIONS.length; i++) {
		var button = document.createElement('button');
		button.classList.add('nav-button');
		button.setAttribute('onclick', 'addInternships(' + i + ', "' + SECTIONS[i] + '")');
		if (i == 0) {
			button.classList.add('active-nav');	
		}
		var image = document.createElement('img');
		image.src = 'images/icons/' + SECTIONS[i] + '.png';
		button.appendChild(image);
		addTextElement('h6', SECTIONS[i], button);
		nav.appendChild(button);
	}
}

function addTextElement(type, text, appendTo) {
	var element = document.createElement(type);
	var textNode = document.createTextNode(text)
	element.appendChild(textNode);
	appendTo.appendChild(element);
}

function displayInternship(event) {
	display.style.display = 'flex';
	image.src = event.target.src;
}

function hideInternship() {
	display.style.display = 'none'
}