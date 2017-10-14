
const PATH = 'images/internships/'

let mainContent;
let navButtons;
let nav;
let display;
let image;

document.addEventListener('DOMContentLoaded', () => {
	display = document.querySelector('article');
	image = display.querySelector('img');
	nav = document.querySelector('nav');
	mainContent = document.querySelector('main');
	addNavButtons();
	navButtons = document.querySelectorAll('footer button');
	addInternships();
});

addInternships = event => {
	mainContent.innerHTML = '';
	mainContent.scrollLeft = 0;
	let target = event ? event.target : navButtons[0];
	if (target.nodeName !== "BUTTON") target = target.parentNode;
	let internships = SECTIONS[target.getAttribute('data-section')].concat(OTHER);

	internships.forEach( internship => {
		let path = PATH + internship;

		// Creates container for internship
		let container = document.createElement('div');
		container.classList.add('internship');

		// Creates img
		let image = document.createElement('img');
		image.src = path;
		image.setAttribute('onerror', "this.style.display='none'");
		image.onclick = displayInternship;

		// Append content
		container.appendChild(image);
		mainContent.appendChild(container);
	});

	navButtons.forEach( navButton => {
		navButton.classList.remove('active-nav');
	});
	target.classList.add('active-nav');
}

