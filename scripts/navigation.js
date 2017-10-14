
addNavButtons = () => {

	Object.keys(SECTIONS).forEach( section => {

		if (checkSection(SECTIONS[section])) {

			// Create section button
			let button = document.createElement('button');
			button.classList.add('nav-button');
			button.setAttribute('data-section', section)
			button.onclick = addInternships;

			// Create section image
			let image = document.createElement('img');
			image.src = `images/icons/${section}.png`;

			// Create section title
			let text = document.createElement('h6');
			let textNode = document.createTextNode(section)
			text.appendChild(textNode);

			// Append elements to document
			button.appendChild(image);
			button.appendChild(text);
			nav.appendChild(button);
		}
	})
}

displayInternship = event => {
	display.style.display = 'flex';
	image.src = event.target.src;
}

hideInternship = () => display.style.display = 'none';

checkSection = section => (section.length + OTHER.length) > 0;

