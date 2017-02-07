
const PATH = 'images/internships/'

var mainContent;
var navButtons;
var nav;
var display;
var image;

document.addEventListener('DOMContentLoaded', function(){
	display = document.getElementsByTagName('article')[0];
	image = display.getElementsByTagName('img')[0];
	nav = document.getElementsByTagName('nav')[0];
	mainContent = document.getElementsByTagName('main')[0];
	addNavButtons();
	navButtons = document.getElementsByTagName('footer')[0].getElementsByTagName('button');
	
	addInternships(0, 'E');
});

function addInternships(target, section) {
	mainContent.innerHTML = '';
	var internships = getInternships(section);
	for (var i = 0; i < internships.length; i++) {
		var path = PATH + internships[i];

		// Creates container for internship
		var container = document.createElement('div');
		container.classList.add('internship');

		// Creates img
		var image = document.createElement('img');
		image.src = path;
		image.onclick = displayInternship;
		
		// Append content
		container.appendChild(image);
		mainContent.appendChild(container);
	}
	if (internships.length == 0) {
		var text = 'Finns inga internships relaterade till den här utbildningen just nu men återkom snart så kanske det finns!';
		addTextElement('h1', text, mainContent)
	}
	for (var i = 0; i < navButtons.length; i++) {
		navButtons[i].classList.remove('active-nav');
	}
	navButtons[target].classList.add('active-nav');
}

function getInternships(section) {
	switch(section) {
	    case 'A':
	    	return A;
	    case 'AE':
	        return AE;
	    case 'D':
	    	return D;
	    case 'E':
	    	return E;
	    case 'Fbw':
	    	return Fbw
	    case 'H':
	    	return H;
	    case 'I':
	        return I;
	    case 'IT':
	    	return IT;
	    case 'K':
	    	return K;
	    case 'KfKb':
	    	return KfKb;
	    case 'M':
	    	return M;
	    case 'S':
	        return S;
	    case 'TD':
	    	return TD;
	    case 'V':
	    	return V;
	    case 'Z':
	    	return Z;
	    default:
	    	return [];
	}
}






