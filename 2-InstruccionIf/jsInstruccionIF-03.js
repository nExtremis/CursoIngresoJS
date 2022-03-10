function mostrar()
{
	//tomo la edad  
	let edadIngresada;
	edadIngresada = parseInt(document.getElementById('txtIdEdad').value);
	if (edadIngresada >= 18) {
		alert('es mayor de edad');
	}else {
		alert('es menor de edad');
	}

}//FIN DE LA FUNCIÓN