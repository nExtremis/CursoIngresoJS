/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
function mostrar(){
	//declaro mis variables principales
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta = "s";
	let bandera = 1;

	let nacionalidadConMasTemperatura;
	let mayorTemperatura;
	let cantSolterasOViudas=0;
	let cantSolterosMayores=0;
	let cantMayoresConFiebre =0;
	let cantCasadas=0;
	let edadCasadas=0;
	let promedioEdadCasadas;
	let mensaje;

	while(respuesta == "s"){
		//ingresamos los datos
		nombre = prompt("Ingrese el nombre");
		nacionalidad = prompt("Ingrese la nacionalidad");
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
			nacionalidadConMasTemperatura= nacionalidad;
			mayorTemperatura= temperaturaCorporal;
			bandera =0;
		}else if(temperaturaCorporal > mayorTemperatura){
			nacionalidadConMasTemperatura= nacionalidad;
			mayorTemperatura= temperaturaCorporal;
		}
		//
		switch(estadoCivil){
			case "soltero":
				//b)solteros mayores de edad
				if(edad>17){
					cantSolterosMayores++;
				}
				if(sexo == "f"){
					cantSolterasOViudas++;
				}
				break;
			case "casado":
				if(sexo == "f"){
					cantCasadas++;
					edadCasadas+=edad;
				}
				break;
			case "viudo":
				//c) viudas mujeres
				if(sexo == "f"){
					cantSolterasOViudas++;
				}
				break;		

		}
		if(edad>60 && temperaturaCorporal > 38){
			cantMayoresConFiebre++;
		}
		respuesta = prompt("Quiere ingresar un nuevo pasajero? s/n").toLowerCase();
	}
	promedioEdadCasadas = edadSolteros/cantSolteros;
	mensaje = `La persona con más temperatura es ${personaMasTemperatura}<br>`;
	mensaje += `hay ${cantSolterosMayores} mayores solteros <br>`;
	mensaje += `hay ${cantSolterasOViudas} hombres que estan viudos o solteros <br>`;
	mensaje += `hay ${cantMayoresConFiebre} personas de la tercera edad con más de 38 de fiebre <br>`;
	mensaje += `el promedio de edad entre las mujeres casadas es ${promedioEdadCasadas}`;
	document.write(mensaje);
}