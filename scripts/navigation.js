const SECTIONS = ['A', 'AE', 'D', 'E', 'Fbw', 'H', 'I', 'IT', 'K', 'KfKb', 'M', 'S', 'TD', 'V', 'Z'];

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

