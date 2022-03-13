/*
Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las
personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre
Edad (mayor o igual a 12)  ---- validar
Vacuna (“rusa”, “china”, “americana”) ----- validar
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana   ---.... antes de validar vacunas
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis) --- validar
Genero (Femenino, Masculino) ----validar
Informar:
a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna más inoculada
.*/
function mostrar()
{
	//declaro variables principales
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let genero;
	let contador = 0;
	let respuesta = "s";
	let mensaje;
	//variables
	let masculinoMasJoven; 
	let bandera = 0;
	let acumuladorDeEdad = 0;
	let cantidadVacunadosChina = 0;
	let cantidadVacunadosAmericana = 0;
	let cantidadMenoresAmericana = 0;
	let porcentajeMenoresEdadAmericana = 0;
	let cantidadVacunadosRusa = 0;
	let vacunadosPrimerDosis = 0;
	let promedioEdadConChinas = 0;
	let porcentajeConUnaDosis = 0;
	let vacunaMasInoculada;
	
	



	//pedimos los datos al usuario.
	while (respuesta == "s"){
		nombre = prompt("Ingrese el nombre: ");
		//ingresamos edad y validamos
		edad = parseInt(prompt("Ingrese la edad: "));
		while ( edad < 12  || Number.isNaN(edad)==true) {
			edad = parseInt(prompt("Error.Ingrese la edad correcta: "));
		}
		//si es menor de edad, solo americana.
		if(edad>11 && edad< 18){
			dosis = "americana";
		}else{
			//validamos vacuna ingresada.
			vacuna = prompt("Ingrese la vacuna: rusa, china o americana ").toLowerCase();
			while(vacuna != "rusa" && vacuna!= "china" && vacuna != "americana"){
			vacuna = prompt("vacuna inexistente. Ingrese la vacuna nuevamente.").toLowerCase();
			}
		}
		//validamos la dosis 
		dosis = prompt("Ingrese la dosis: primera o segunda con la letra p o s");
		while (dosis != "p" && dosis != "s") {
			dosis = prompt("Error dosis Inexistente.Ingrese la dosis:").toLowerCase();
		}
		//validamos el genero
		genero = prompt("Ingrese el genero: masculino o femenino con las letras m o f").toLowerCase();
		while (genero != "m" && genero != "f") {
			genero = prompt("Ingrese el genero:").toLowerCase();
		}
		switch(vacuna){
			case "americana":
				if (edad<18){
					cantidadMenoresAmericana++;
				}
				cantidadVacunadosAmericana++;
				break;
			case "china":
				cantidadVacunadosChina++;
				acumuladorDeEdad += edad; 
				break;
			case "rusa":
				cantidadVacunadosRusa++;
				break;	
		}
		//el masculino mas joven ingresado
		if (genero == "m" && bandera == 0) {
			edadMasculinoMasJoven = edad;
			masculinoMasJoven = nombre;
			bandera = 1;
		}else if (genero == "m" && edad > edadMasculinoMasJoven){
			masculinoMasJoven = edad;
			masculinoMasJoven = nombre;
		}
		//los vacunados con solo 1 dosis
		if(dosis == "p"){
			vacunadosPrimerDosis++;
		}
		//la vacuna mas inoculada
		if(cantidadVacunadosAmericana > cantidadVacunadosChina && cantidadMenoresAmericana > cantidadVacunadosRusa){
			vacunaMasInoculada = "americana";
		}else if (cantidadVacunadosChina > cantidadVacunadosAmericana && cantidadVacunadosChina > cantidadVacunadosRusa){
			vacunaMasInoculada = "china";
		}else {
			vacunaMasInoculada = "rusa";
		}
		contador++;//contador del while que usamos para el total de vacunas
		
		respuesta = prompt("Quiere ingresar otra persona?: s/n"); // si respone "s" continua ingresando datos
	}
	//el promedio de edad de personas con vacuna china
	if (cantidadVacunadosChina <1){
		promedioEdadConChinas = 0;
	}else{
		promedioEdadConChinas = acumuladorDeEdad/cantidadVacunadosChina;
	}
	//el porcentaje de menores con vacunas americanas solo de personas con vacunas americanas.
	if (cantidadVacunadosAmericana <1){
		porcentajeMenoresEdadAmericana = 0;
	}else{
		porcentajeMenoresEdadAmericana = (cantidadMenoresAmericana*100) /cantidadVacunadosAmericana;
	}
	
	//porcentaje de los vacunados con una dosis entre el total de vacunados
	porcentajeConUnaDosis = (vacunadosPrimerDosis*100) / contador++;

	mensaje = `El promedio de edad de personas con vacuna china es ${promedioEdadConChinas} `;
	mensaje = mensaje + `\n Entre los vacunados con vacunas americanas un ${porcentajeMenoresEdadAmericana}% eran menores `;
	mensaje = mensaje + `\n Hay un ${porcentajeConUnaDosis}% de vacunados con una sola dosis `;
	mensaje = mensaje + `\n La vacuna más inoculada es ${vacunaMasInoculada}`;
	//mostramos los resultados
	document.write(mensaje);
}






