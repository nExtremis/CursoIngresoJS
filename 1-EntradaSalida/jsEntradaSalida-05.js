/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaro todas las variables que voy a usar
	let nombreIngresado 
	let edadIngresada
	let mensaje 		//variable para mostrar la concatenacion pedida

	//guardo en la variable el nombre ingresado por el usuario
	nombreIngresado = document.getElementById('txtIdNombre').value;

	//guardo en la variable la edad ingresada por el usuario
	edadIngresada = document.getElementById('txtIdEdad').value;

	//guardo en una variable el mensaje para el usuario
	mensaje = `usted se llama ${nombreIngresado} y tiene ${edadIngresada}`
	

	alert(mensaje);
}

