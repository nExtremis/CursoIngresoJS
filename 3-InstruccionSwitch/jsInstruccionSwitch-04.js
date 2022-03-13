function mostrar()
{
	//tomo el mes
	let mesDelAño 
	mesDelAño = document.getElementById('txtIdMes').value;
	
	switch (mesDelAño){

		case "Enero":
		case "Marzo":
		case "Julio":
		case "Octubre":
		case "Diciembre":
		case "Mayo":
			alert('tiene 31 días');
			break;
		case "Febrero":
			alert('tiene 28 días');
			break;
		default:
		alert('tiene 30 días')
	}
}//FIN DE LA FUNCIÓN