var botonCopiar = document.querySelector('#bot_copiar');

botonCopiar.addEventListener('click', function (event) {
	event.preventDefault();

	let formS = document.querySelector('#mensaje-encriptado');
	let aux = document.createElement('input');

	aux.setAttribute('value', formS.textContent);

	document.body.appendChild(aux);

	aux.select();

	document.execCommand('copy');

	document.body.removeChild(aux);
});
 