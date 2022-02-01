const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight *5.0;

	

function animarScroll(){
	const topoItem = scrollAnima.getBoundingClientRect().top;

const itenVisivel = topoItem - metadeWindow < 0

	if(itenVisivel){
		scrollAnima.classList.add('show-button');
	}else{
		scrollAnima.classList.remove('show-button');
	};

};

window.addEventListener('scroll',animarScroll);
















