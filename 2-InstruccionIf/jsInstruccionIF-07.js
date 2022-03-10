function mostrar()
{
	 //declaro variables 
	let edadIngresada;
	let esSoltero;
	let esMenor;
	let estadoCivil;

	edadIngresada = parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil = document.getElementById('estadoCivil').value;

	esMenor = edadIngresada < 18;
	esSoltero = estadoCivil == 'Soltero';

	if (esMenor && !esSoltero) {
		alert('Es muy pequeño para NO ser soltero');
	}


}//FIN DE LA FUNCIÓN