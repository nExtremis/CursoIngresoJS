function mostrar()
{
	//tomo la edad  
	let edadIngresada;
	let esAdolecente;
	edadIngresada = parseInt(document.getElementById('txtIdEdad').value);
	esAdolecente = edadIngresada >13 && edadIngresada <=17;
	
	if (edadIngresada >= 18) {
		alert('es mayor de edad');
	}else if(esAdolecente){
		alert('es un adolecente');
	}else {
		alert('es un niño');
	}
}//FIN DE LA FUNCIÓN