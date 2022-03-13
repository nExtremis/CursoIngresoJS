function mostrar()
{
	//declaro mis variables
	let estacionIngresada;
	let destinoIngresado;

	precioBase = 15000;
	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;
	
	switch (estacionIngresada){
		case "Invierno":
			switch (destinoIngresado){
				case "Bariloche":
					alert(`se viaja`);
					break;
				case "Cordoba":	
				case "Cataratas":
				case "Mar del plata":
					alert(`no se viaja`);
					break;
			}
		break;	
		case "Verano":
			switch (destinoIngresado){
				case "Bariloche":
				case "Cordoba":
					alert(`no se viaja`);
					break;	
				case "Cataratas":
				case "Mar del plata":
					alert(`se viaja`);
					break;
			}
		break;	
		case "Otoño":	
			switch (destinoIngresado){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					alert(`se viaja`);
					break;
			}
		case "Primavera":
			switch (destinoIngresado){
				case "Bariloche":
					alert("no se viaja");
					break;
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					alert(`se viaja`);
					break;
			}
		break;
		}	

}//FIN DE LA FUNCIÓN