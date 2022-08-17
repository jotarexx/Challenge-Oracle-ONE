var botonEncriptar = document.querySelector('.encriptacion');

botonEncriptar.addEventListener('click', function (event) {
	event.preventDefault();

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

	var form = document.querySelector('.principal-centroF');
	var formS = document.querySelector('#mensaje-encriptado');

	let mensaje = form.mensajeO.value;

	const letrasRemplazar = ['a', 'e', 'i', 'o', 'u'];
	const letrasReemplazo = ['ai', 'enter', 'imes', 'ober', 'ufat'];
	const letrasAuxiliares = ['A', 'E', 'I', 'O', 'U'];

	var mensajeCodificado = mensaje;

	for (let i = 0; i < letrasRemplazar.length; i++) {
		mensajeCodificado = mensajeCodificado.replaceAll(
			letrasRemplazar[i],
			letrasAuxiliares[i],
		);
	}
	for (let i = 0; i < letrasRemplazar.length; i++) {
		mensajeCodificado = mensajeCodificado.replaceAll(
			letrasAuxiliares[i],
			letrasReemplazo[i],
		);
	}

	formS.textContent = mensajeCodificado;
	form.reset();
});
