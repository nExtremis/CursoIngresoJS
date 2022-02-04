/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	// variables declaradas
	let importe;
	let descuento;
	let importeConDescuento;


	//guardo el importe en la variable y lo convierto a entero
	importe = parseInt(document.getElementById("txtIdImporte").value);

	// calculo el descuento
	descuento = importe * 0.25;

	// calculo el importe final con el descuento aplicado
	importeConDescuento = importe - descuento;

	//muestro en el cuadro de texto el importe con el descuento
	document.getElementById("txtIdResultado").value = importeConDescuento;
}
