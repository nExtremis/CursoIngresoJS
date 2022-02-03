/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// declaro las variables
	let numero1; // de tipo numerico
	let numero2; // de tipo numerico
	let resultado; // de tipo numerico

	//Guardo en las variables los dos números
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	//convierto ambos números en enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	// guardo en la otra variable el resultado de la suma de ambos numeros.
	resultado = numeroUno+numeroDos;


	alert(resultado);
}

