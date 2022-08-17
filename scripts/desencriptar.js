var botonDesencriptar = document.querySelector('.desencriptacion');
botonDesencriptar.addEventListener('click', function (event) {
	event.preventDefault();
	var form = document.querySelector('.principal-centroF');
	var formS = document.querySelector('#mensaje-encriptado');
	const letrasRemplazar = ['a', 'e', 'i', 'o', 'u'];
	const letrasReemplazo = ['ai', 'enter', 'imes', 'ober', 'ufat'];

	if (vigilante) {
		var busqueda = (document.querySelector('.img_buqueda').style.display = 'none');
		var visible = document.querySelector('.msj_encr');
		visible.classList.remove('msj_encr');
		var visible = document.querySelector('.msj_encr2');
		visible.classList.remove('msj_encr2');
		vigilante = false;
		var mensajeE = document.querySelector('.principal-form');
		mensajeE.classList.remove('principal-form');
		mensajeE.classList.add('principal-form2');
	}

	var mensajeDecodificado = form.mensajeO.value;
	for (let i = 0; i < letrasRemplazar.length; i++) {
		mensajeDecodificado = mensajeDecodificado.replaceAll(
			letrasReemplazo[i],
			letrasRemplazar[i],
		);
	}

	formS.textContent = mensajeDecodificado;
	form.reset();
});