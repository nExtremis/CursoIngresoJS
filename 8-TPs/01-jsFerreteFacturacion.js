/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
//declaro variables con var que tengan alcance en todas las funciones que voy a usar para evitar repetir codigo.
var precioUno;
var precioDos;
var precioTres;
var precioTotal;
var promedio;
var precioConIVA;
function Sumar () 
{
	
	//guardar en las variables los precios correspondientes
	precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
	precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

	//guardamos el resultado de la operacion en la variable "suma".
	precioTotal = precioUno + precioDos + precioTres ;

	alert("la suma de los precios es: "+precioTotal);

	
}
function Promedio () 
{
	//guardar en las variables los precios correspondientes
	precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
	precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

	precioTotal = precioUno + precioDos + precioTres;

	//guardamos el promedio en una variable

	promedio = precioTotal / 3 ;

	//mostramos el promedio
	alert("el promedio de todos los precios es: "+promedio);

}
function PrecioFinal () 
{
	//guardar en las variables los precios correspondientes
	precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
	precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

	//sumamos todos los precios y los guardamos en una variable
	precioTotal = precioUno + precioDos + precioTres;

	//sacamos le precio final con el 21% del iva 

	IVADelPrecio = precioTotal * 0.21;

	precioConIVA = precioTotal + IVADelPrecio;

	//mostramos el precio final.
	alert("el precio final con IVA es: "+precioConIVA);
	
}