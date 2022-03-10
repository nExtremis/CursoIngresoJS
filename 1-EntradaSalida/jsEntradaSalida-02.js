/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// creo una variable para el prompt

	let nombreIngresado

	// guardo el nombre ingresado por el usuario  en la variable 
	nombreIngresado = prompt("ingresa tu nombre");

	// muestro el nombre del usuario por el alert
	alert("el nombre ingresado es: "+nombreIngresado);
}