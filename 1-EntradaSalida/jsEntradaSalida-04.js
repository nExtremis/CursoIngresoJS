/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
consideraciones: revisar siempre la id 
*/
function mostrar()
{
	//declaro mi variable
	let nombreIngresado;

	//le pido al usuario un dato
	nombreIngresado = prompt("ingrese un dato");
	
	//muestro el dato guardado en la variable
	document.getElementById('txtIdNombre').value = nombreIngresado;
}

