function mostrar()
{
	//declaro mis variables
	let estacionIngresada;
	let destinoIngresado;
	let precioBase;
	//inicializo
	precioBase = 15000;
	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch (estacionIngresada){
		case "Invierno":
			switch (destinoIngresado){
				case "Bariloche":
					alert(`el precio final es ${precioBase + (precioBase * 0.2)}$`);
					break;
				case "Cordoba":	
				case "Cataratas":
					alert(`el precio final es ${precioBase - (precioBase * 0.1)}$`);
					break;
				case "Mar del plata":
					alert(`el precio final es ${precioBase + (precioBase * 0.2) }$`);
					break;
			}
		break;	
		case "Verano":
			switch (destinoIngresado){
				case "Bariloche":
					alert(`el precio final es ${ precioBase - (precioBase * 0.2)}$`);
					break;
				case "Cordoba":	
				case "Cataratas":
					alert(`el precio final es ${precioBase + (precioBase * 0.1)}$`);
					break;
				case "Mar del plata":
					alert(`el precio final es ${precioBase + (precioBase * 0.2)}$`);
					break;
			}
		break;	
		case "Otoño":	
		case "Primavera":
			switch (destinoIngresado){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					alert(`el precio final es ${precioBase + (precioBase * 0.1)}$`);
					break;
				case "Cordoba":
					alert(`el precio final es ${precioBase}$`);
			}
		break;		
	}
}//FIN DE LA FUNCIÓN