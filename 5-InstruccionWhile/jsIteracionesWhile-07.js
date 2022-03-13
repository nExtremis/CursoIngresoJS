/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='s';

	while (respuesta=='s'){
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(Number.isNaN(numeroIngresado)==true){
			numeroIngresado = prompt("Error.ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		acumulador += numeroIngresado
		contador += 1
		respuesta = prompt("quiere ingresar otro numero?");
	}
	promedio =acumulador/contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN