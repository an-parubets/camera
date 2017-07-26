window.addEventListener('load', init, false);

function target() {
	let bodyElement = document.querySelector('body');

	bodyElement.classList.contains('open') ? bodyElement.classList.remove('open') : bodyElement.classList.add('open');
}

function init() {
	document.querySelector('.btn').addEventListener('click', target, false);
}
