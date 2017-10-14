
addNavButtons = () => {
	Object.keys(SECTIONS).forEach( section => {
		if (checkSection(SECTIONS[section])) {
			let button = document.createElement('button');
			button.classList.add('nav-button');
			button.setAttribute('data-section', section)
			button.onclick = addInternships;
			let image = document.createElement('img');
			image.src = `images/icons/${section}.png`;
			button.appendChild(image);
			addTextElement('h6', section, button);
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

