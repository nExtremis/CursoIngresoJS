function mostrar()
{

	//declaro variables
	let esSoltero;
	let esMayor;
	let estadoCivil;
	let edadIngresada

	// guardo en las variables  los datos ingresados por el usuario
	estadoCivil = document.getElementById('estadoCivil').value;
	edadIngresada = parseInt(document.getElementById('txtIdEdad').value);

	
	console.log(typeof(estadoCivil));

	//guardo las condiciones del if en variables 	
	esSoltero = estadoCivil == 'Soltero';
	esMayor = edadIngresada >= 18;

	if (!esMayor && !esSoltero){
	}else if (esSoltero &&  esMayor) {
		alert('Es soltero y no es menor')
	}


}//FIN DE LA FUNCIÓN