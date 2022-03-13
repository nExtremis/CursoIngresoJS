/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='s';

	while (respuesta=='s'){
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(Number.isNaN(numeroIngresado)==true){
			numeroIngresado = prompt("Error.ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if( numeroIngresado >=1){
			sumaPositivos += numeroIngresado
		} else{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		respuesta = prompt("quiere ingresar otro numero? s/n");
	}
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;	
}//FIN DE LA FUNCIÓN