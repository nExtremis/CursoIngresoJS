function mostrar()
{
	let destinoIngresado;
	destinoIngresado =document.getElementById("txtIdDestino").value;
	switch(destinoIngresado){
		case "Ushuaia":
		case "Bariloche":
			alert(`${destinoIngresado} se encuentra al Sur`);
			break;
		case "Cataratas":
			alert(`${destinoIngresado} se encuentra al Norte`);
			break;
		case "Mar del plata":
			alert(`${destinoIngresado} se encuentra al Este`);
			break;			
	}
}//FIN DE LA FUNCIÓN