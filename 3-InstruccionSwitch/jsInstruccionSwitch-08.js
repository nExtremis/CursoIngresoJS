function mostrar()
{
	let destinoIngresado;
	destinoIngresado= document.getElementById("txtIdDestino").value;
	switch(destinoIngresado){
		case "Ushuaia":
		case "Bariloche":
			alert(`En ${destinoIngresado} hace frio`);
			break;
		case "Cataratas":
			alert(`En ${destinoIngresado} hace calor`);
			break;
		case "Mar del plata":
			alert(`En ${destinoIngresado} hace calor`);
			break;			
	}
	alert(destinoIngresado);

}//FIN DE LA FUNCIÓN