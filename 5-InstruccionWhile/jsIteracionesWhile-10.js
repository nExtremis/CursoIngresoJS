/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta = "s";
	var numeroIngresado;
	var sumaNegativos=0;
	let sumaPositivos = 0;
	let numNegativos =0;
	let numPositivos = 0;
	let cantCeros=0;
	let cantNumPares = 0;
	let cantTotalNum =0;
	let promedioPositivos ;
	let promedioNegativos;


	

	while(respuesta=="s"){
		numeroIngresado = parseInt(prompt("Ingresar un número"));
		while (Number.isNaN(numeroIngresado)==true){
			numeroIngresado = parseInt(prompt("Ingresar un número"));
		}
		if (numeroIngresado<0){
			sumaNegativos += numeroIngresado;
			numNegativos++;
		} else if(numeroIngresado >0){
			sumaPositivos += numeroIngresado;
			numPositivos++;
		}else{
			cantCeros++;
		}
		if(numeroIngresado%2 ==0){
			cantNumPares++;
		}
		cantTotalNum++;
		respuesta=prompt("desea continuar?s/n");
	}//fin del while
	promedioPositivos = numPositivos/cantTotalNum;
	promedioNegativos = numNegativos/cantTotalNum;
	positivosMenosNEgativos = sumaPositivos - sumaNegativos;
	document.write("la suma de negativos es :"+sumaNegativos+"<br>");
	document.write("la suma de positivos es :"+sumaPositivos+"<br>");
	document.write("la cantidad de negativos es :"+numNegativos+"<br>");
	document.write("la cantidad de positivos es :"+numPositivos+"<br>");
	document.write("la cantidad de ceros es :"+cantCeros+"<br>");
	document.write("la cantidad de numeros pares es :"+cantNumPares+"<br>");
	document.write("el promedio de numeros negativos es :"+promedioNegativos+"<br>");
	document.write("el promedio de numeros positivos es :"+promedioPositivos+"<br>");
	document.write("la diferencia de numeros positivos y numeros negativos es :"+positivosMenosNEgativos);
}//FIN DE LA FUNCIÓN