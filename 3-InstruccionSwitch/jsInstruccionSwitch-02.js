function mostrar()
{
	//tomo el mes
	let mesDelAño 
	mesDelAño = document.getElementById('txtIdMes').value;
	switch (mesDelAño){

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":	
		case "Enero":
		case "Febrero":
		case "Marzo":
			 alert("Ya pasamos el frio, ahora calor!!!.");
			 break;
		case "Abril":
		case "Mayo":
		case "Junio":
			alert( "Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");	
	}
}