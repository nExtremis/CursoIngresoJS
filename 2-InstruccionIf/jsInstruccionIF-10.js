function mostrar()
{
	//declaro mis variables
	let random;
	let excelente;
	let aprobo;

	//Genero el número RANDOM entre 1 y 10 
	random = Math.floor(Math.random() * (11-1) + 1);

	excelente =  random >= 9;
	aprobo = random > 4;
	console.log(random);	

	if (excelente){
		alert('EXCELENTE');
	}else if (aprobo) {
		alert('APROBÓ');
	}else {
		alert('Vamos la proxima se puede');
		console.log(random);
	}



}//FIN DE LA FUNCIÓN