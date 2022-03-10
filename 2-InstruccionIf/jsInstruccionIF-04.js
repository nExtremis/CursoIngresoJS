function mostrar()
{
	//tomo la edad  
	let edadIngresada;
	let esAdolecente;

	edadIngresada = parseInt(document.getElementById('txtIdEdad').value);
	esAdolecente = edadIngresada >13 && edadIngresada <=17;

	if(esAdolecente){
		alert('Es un adolecente');
	}
}//FIN DE LA FUNCIÓN