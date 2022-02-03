/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//variables declaradas 
	let sueldoIngresado
	let aumentoASueldo
	let sueldoConAumento

	sueldoIngresado = parseInt(document.getElementById("txtIdSueldo").value);

	aumentoASueldo = (sueldoIngresado * 0.10) 

	sueldoConAumento = aumentoASueldo + sueldoIngresado

	document.getElementById("txtIdResultado").value = sueldoConAumento;

}
