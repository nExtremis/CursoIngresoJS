/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while (respuesta=='si'){
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if( numeroIngresado >=1){
			sumaPositivos += numeroIngresado
		} else if (numeroIngresado < 1){
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}else{
			alert("numero invalido");
		}
		respuesta = prompt("quiere ingresar otro numero?");
	}
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;	
}//FIN DE LA FUNCIÓN