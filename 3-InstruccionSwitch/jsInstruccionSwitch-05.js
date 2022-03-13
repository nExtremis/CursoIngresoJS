function mostrar()
{
	//tomo la hora
	let horaDelDia;
	horaDelDia = parseInt(document.getElementById("txtIdHora").value);
	switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
			alert("Es de mañana");
			break;					
		default:
			break;
	}
}//FIN DE LA FUNCIÓN