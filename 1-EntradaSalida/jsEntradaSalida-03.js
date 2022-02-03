/* 
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
existen dos formas de resolverlo
*/
function mostrar()
{
	//declaro la variable
	var nombreIngresado;

	//Forma1  nombreIngresado = txtIdNombre.value;

	//Forma 2
	nombreIngresado = document.getElementById('txtIdNombre').value

	alert("el nombre ingresado es: "+ nombreIngresado);

}


