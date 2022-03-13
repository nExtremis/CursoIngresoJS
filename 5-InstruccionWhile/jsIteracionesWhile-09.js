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
	esElMinimo = numeroIngresado < numeroMinimo;
	esElMaximo = numeroIngresado > numeroMaximo; 
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='s';
	while(respuesta=="s"){
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		esElMinimo = numeroIngresado < numeroMinimo;
		esElMaximo = numeroIngresado > numeroMaximo; 
		if(banderaDelPrimero=="es el primero"){   // booleano =  true 
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
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN

							
