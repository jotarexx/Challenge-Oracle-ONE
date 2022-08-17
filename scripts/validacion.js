
function validarTecla(evento) {
	var codigoTecla = evento.key;
	caracteresAdmitidos = 'abcdefghijklmnñopqrstuvwxyz ,."!;';
	if (caracteresAdmitidos.includes(evento.key)) {
		return true;
	} else {
		return false;
	}
}
