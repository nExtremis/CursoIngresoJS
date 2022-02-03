/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	//variables
	let numeroUno
	let numeroDos
	let suma

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = numeroUno + numeroDos;

	alert("la suma es: "+suma);	
}

function restar()
{
	//variables
	let numeroUno
	let numeroDos
	let resta

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resta = numeroUno - numeroDos;
	alert("la resta es: "+resta);	
}

function multiplicar()
{ 
	//variables
	let numeroUno
	let numeroDos
	let multiplicacion

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	

	multiplicacion = numeroUno * numeroDos
	alert("la multiplicación es: "+multiplicacion);
}

function dividir()
{
	//variables
	let numeroUno
	let numeroDos
	let division

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	division = numeroUno / numeroDos
	alert("la división es: "+division);
	
}

