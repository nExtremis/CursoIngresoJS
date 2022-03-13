/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{

}
	
function mostrar()
{
	//variables declarada
	let diametroMayor;
	let diametroMenor;
	let ladoMayor;
	let ladoMenor;

	let areaCometa;
	let perimetroCometa;
	let entrecrucesCometa;

	let baseTrianguloCometa;
	let alturaTrianguloCometa;
	let areaDeTrianguloCometa;
	
	let colaCometa;

	let plasticoNecesario;
	let papelParaCuerpo;
	let PapelParaCola;
	let papelTotalNecesario;

	let papelRosaYCelesteNecesario;

	let mensaje;



	// pido por prompt los datos al usuario
	diametroMayor = prompt("Ingrese el diametro mayor del cometa");
	diametroMenor = prompt("Ingrese el diametro menor del cometa");
	ladoMayor = prompt("Ingrese la medida de los lados mayores del cometa");
	ladoMenor = prompt("Ingrese la medida de los lados menores del cometa");

	//parseo los datos numericos
	diametroMayor = parseFloat(diametroMayor);
	diametroMenor = parseFloat(diametroMenor);
	ladoMayor = parseFloat(ladoMayor);
	ladoMenor = parseFloat(ladoMenor);


	//calculo el perimetro del cometa
	perimetroCometa = (ladoMayor *2)+(ladoMenor *2);

	//calculo los entrecruces del cometa

	entrecrucesCometa = diametroMayor + diametroMenor;


	//calculo el area del triangulo del cometa

	baseTrianguloCometa = diametroMayor;

	alturaTrianguloCometa = (diametroMenor/2);

	areaDeTrianguloCometa = ( alturaTrianguloCometa * baseTrianguloCometa)/2;

	// calculo el area total del cometa

	areaCometa = areaDeTrianguloCometa *2;

	//calculo el 10% del area del cometa, que es necesario para cola de este mismo

	colaCometa = areaCometa * 0.10;

	//calculamos el plastico necesario para el cometa en metros

	plasticoNecesario = (perimetroCometa + entrecrucesCometa) * 10 * 0.01;

	//calculamos el papel necesario para la cola, y cuerpo en metros

	papelParaCuerpo = areaCometa*0.01;
	PapelParaCola = colaCometa*0.01;

	papelTotalNecesario = (papelParaCuerpo + PapelParaCola)*10 ;

	//calculamos el papel de color rosa y celeste necesario para el cometa

	

	papelRosaYCelesteNecesario = papelTotalNecesario/2;

	//solo necesitamos dividir en 2


	//optimizo el mensaje que va en el alert en una variable
	
	 
	mensaje = `vamos a necesitar ${papelTotalNecesario}metros de papel y ${plasticoNecesario}metros de plastico para el cometa`;
	

	mensaje = mensaje+ `\n se necesita para el cometa ${papelRosaYCelesteNecesario}metros de color rosa y ${papelRosaYCelesteNecesario}metros de color celeste`;

	alert(mensaje);
}