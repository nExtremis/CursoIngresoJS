/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	numeroIngresado = parseInt(numeroIngresado);

	while (numeroIngresado >= 10 ||  numeroIngresado <= 0 || Number.isNaN(numeroIngresado) === true    ) {
		if (numeroIngresado <= 0){
			numeroIngresado = prompt("no puede ser numero negativo");
			numeroIngresado = parseInt(numeroIngresado);
		}else if (numeroIngresado >= 10){
			numeroIngresado = prompt("no puede ser un numero mayor a 9.");
			numeroIngresado = parseInt(numeroIngresado);
		}else{
			numeroIngresado = prompt("solo puede ingresar numeros.");
			numeroIngresado = parseInt(numeroIngresado);
		}
		

	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN 