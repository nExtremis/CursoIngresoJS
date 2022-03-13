function mostrar()
{
	//tomo el mes
	let mesDelAño 
	mesDelAño = document.getElementById('txtIdMes').value;
	
	switch (mesDelAño) {
		case "Febrero":
			alert(" Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");	
	}
}//FIN DE LA FUNCIÓN