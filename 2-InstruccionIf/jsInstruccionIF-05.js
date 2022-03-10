function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = parseInt(document.getElementById('txtIdEdad').value);
	esAdolecente = edadIngresada >13 && edadIngresada <=17;

	if(!esAdolecente){
		alert('no es un adolecente');
	}

}//FIN DE LA FUNCIÓN