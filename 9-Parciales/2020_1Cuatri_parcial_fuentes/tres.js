/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar(){
	//declaro mis variables principales
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta = "s";
	let bandera = 1;

	let personaMasTemperatura;
	let mayorTemperatura;
	let cantSolterosOViudos=0;
	let cantViudosMayores=0;
	let cantMayoresConFiebre =0;
	let cantSolteros=0;
	let edadSolteros=0;
	let promedioEdadSolteros;
	let mensaje;

	while(respuesta == "s"){
		//ingresamos los datos
		nombre = prompt("Ingrese el nombre");
		edad = parseInt("Ingrese la edad");
		while(edad<1 || Number.isNaN(edad)==true){
			edad = parseInt("Error.Ingrese la edad");
		}
		sexo = prompt("Ingrese el sexo : f o m").toLowerCase();
		while(sexo!="f" && sexo!="m"){
			sexo = prompt("Error.Ingrese el sexo : f o m").toLowerCase();
		}
		estadoCivil = prompt("Ingrese el sexo : soltero, casado o viudo").toLowerCase();
		while(estadoCivil != "soltero" && sexo != "casado" && sexo!="viudo"){
			estadoCivil = prompt("Error.Ingrese el sexo : soltero, casado o viudo").toLowerCase();
		}
		temperaturaCorporal = prompt("Ingrese la temperatura corporal");
		while(Number.isNaN(temperaturaCorporal)==true){
			temperaturaCorporal = prompt("Error.Ingrese la temperatura corporal");
		}
		//procesamos los datos
		//a) persona con mayor temperatura 
		if(bandera==1){
			personaMasTemperatura= nombre;
			mayorTemperatura= temperaturaCorporal;
			bandera =0;
		}else if(temperaturaCorporal > mayorTemperatura){
			personaMasTemperatura= nombre;
			mayorTemperatura= temperaturaCorporal;
		}
		//
		switch(estadoCivil){
			case "soltero":
				//solteros hombres
				if(sexo == "m"){
					cantSolterosOViudos++;
					cantSolteros++;
					edadSolteros+=edad;
				}
				break;
			case "casado":
				break;
			case "viudo":
				//b) cantidad de viudos mayores de edad
				if(edad>17){
					cantViudosMayores++;
				}
				//c) viudos hombres
				if(sexo == "m"){
					cantSolterosOViudos++;
				}
				break;		

		}
		if(edad>60 && temperaturaCorporal > 38){
			cantMayoresConFiebre++;
		}
		respuesta = prompt("Quiere ingresar un nuevo pasajero? s/n").toLowerCase();
	}
	promedioEdadSolteros = edadSolteros/cantSolteros;
	mensaje = `La persona con más temperatura es ${personaMasTemperatura}<br>`;
	mensaje += `hay ${cantViudosMayores} mayores viudos <br>`;
	mensaje += `hay ${cantSolterosOViudos} hombres que estan viudos o solteros <br>`;
	mensaje += `hay ${cantMayoresConFiebre} personas de la tercera edad con más de 38 de fiebre <br>`;
	mensaje += `el promedio de edad entre los hombres solteros es ${promedioEdadSolteros}`;
	document.write(mensaje);
}