/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	let nroIntentos;
	claveIngresada = prompt("ingrese el número clave.");

	nroIntentos = 10	
	while (claveIngresada != "utn750" && nroIntentos > 1){
		nroIntentos = nroIntentos - 1
		claveIngresada = prompt(`por favor ingrese la clave correcta, le queda ${nroIntentos} intentos`);
	}
	if (claveIngresada == "utn750"){
		alert("clave correcta");
	}else{
		alert(`no le quedan mas intentos, reintente mas tarde`)
	}		
}
