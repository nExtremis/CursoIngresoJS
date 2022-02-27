/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	//declaro mis variables
	var sexoIngresado;
	// pido los datos al user
	sexoIngresado = prompt("ingrese f ó m.");
	// uso un while para pedir el sexo hasta que de la respuesta correcta.
	while (!(sexoIngresado =="f" || sexoIngresado =="m")){
		//mensaje error
		alert("Error, respuesta no valida");
		// volvemos a pedir el dato
		sexoIngresado = prompt("ingrese f ó m.");
	}
	// si el user no pone "f" o "m", entra en un bucle infinito, entonces nunca sale del while
	
	//renombramos los datos para mostrarlos por la caja de texto
	if (sexoIngresado == "f") {
		sexoIngresado = "Femenino" ;
	}else{
		sexoIngresado = "Masculino" ;
	}
	//mostramos en la caja de texto, el dato ingresa ya renombrado correctamente.
	document.getElementById('txtIdSexo').value = sexoIngresado;
	
	/*  OBSERVACIONES: el if nunca va a fallar, porque si no ingresa una de las 2 opciones
		nunca va a salir del while, entonces nunca pasa al if.
	*/
}