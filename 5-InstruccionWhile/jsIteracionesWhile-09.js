/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.

*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var contador;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var esElMinimo;
	var esElMaximo;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si"){
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if(banderaDelPrimero==="es el primero"){   // booleano =  true 
			numeroMinimo = numeroIngresado
			numeroMaximo = numeroIngresado
			banderaDelPrimero = "no es el primero";
		}else if (esElMaximo){        
			numeroMaximo = numeroIngresado;
		}else if (esElMinimo){
			numeroMinimo = numeroIngresado;
		}

		respuesta = prompt("quiere ingresar otro numero?");
	}
	document.getElementbyId('txtIdMaximo').value = numeroMaximo;
	document.getElementbyId('txtIdMinimo').value = numeroMinimo;
}//FIN DE LA FUNCIÓN
