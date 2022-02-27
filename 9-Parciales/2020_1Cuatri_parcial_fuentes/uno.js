/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	//declaro variables
	var tipoProducto;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var contador;
	var mensaje;

	var bandera;
	var cantidadMasBarato;
	var fabricanteMasBarato;

	///variables para el ejercicio b
	var cantidadTotalDeAlcohol;
	var cantidadTotalDeBarbijo;
	var cantidadTotalDeJabon;
	var tipoConMayorCantidad;
	var precioTotalAlcohol;
	var precioTotalBarbijo;
	var precioTotalJabon;


	//// inicializamos variables
	contador = 0;
	bandera = 0;
	cantidadTotalDeAlcohol = 0;
	cantidadTotalDeBarbijo = 0;
	cantidadTotalDeJabon = 0;

	// hacemos un recorrido, obteniendo datos por prompt y procesandolos.	
	while( contador < 5){ 
		tipoProducto = prompt("Producto a ingresar: ").toLowerCase();
		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol"){ // 
			tipoProducto = prompt("Error. Producto a ingresar: ").toLowerCase();
		}
		precio = prompt("precio del producto");
		precio = parseInt(precio);
		while( precio<=100 || precio>=300 ){
			precio = prompt("Error. Precio del producto: ");
			precio = parseInt(precio);
		}
		cantidadDeUnidades = prompt("ingrese la cantidad de unidades: ");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
		while (cantidadDeUnidades<0 || cantidadDeUnidades >=1000) {
			cantidadDeUnidades = prompt("Error.ingrese la cantidad de unidades: ");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}
		marca = prompt("ingrese la marca del producto: ");
		fabricante = prompt("ingrese el fabricante del producto: ");
		///// USAMOS LOS DATOS OBTENIDOS
		//a)
		if (tipoProducto == "alcohol" && bandera== 0) { //condicion == true 
			cantidadMasBarato = cantidadDeUnidades;
			fabricanteMasBarato = fabricante;
			bandera == 1;
		}else if(tipoProducto == "alcohol" && cantidadDeUnidades > cantidadMasBarato){
			cantidadMasBarato = cantidadDeUnidades;
			fabricanteMasBarato = fabricante;
		}
		//b)
		switch (tipoProducto){
			case "alcohol":
				cantidadTotalDeAlcohol += cantidadDeUnidades;
				precioTotalAlcohol += (cantidadDeUnidades * precio);
				break;
			case "barbijo":
				cantidadTotalDeBarbijo += cantidadDeUnidades;
				precioTotalBarbijo = (cantidadDeUnidades * precio);
				break;
			case "jabon":
				cantidadTotalDeJabon += cantidadDeUnidades;
				precioTotalJabon =(cantidadDeUnidades * precio);
		}
		contador += 1
	}
	if (cantidadTotalDeAlcohol >= cantidadTotalDeBarbijo && cantidadTotalDeAlcohol >= cantidadTotalDeJabon ) {
		tipoConMayorCantidad = "alcohol";
		promedioPorCompra =  precioTotalAlcohol /cantidadTotalDeAlcohol ;
	} else if(cantidadTotalDeBarbijo>=cantidadTotalDeAlcohol && cantidadTotalDeBarbijo>= cantidadTotalDeJabon){
		tipoConMayorCantidad = "barbijo";
		promedioPorCompra = precioTotalBarbijo /cantidadTotalDeBarbijo ;
	}else{
		tipoConMayorCantidad = "barbijo";
		promedioPorCompra =  precioTotalJabon / cantidadTotalDeJabon ;
	}
	mensaje = `el alcohol más barato es del fabricante: ${fabricanteMasBarato} y la cantidad de unidades es: ${cantidadMasBarato}`;
	mensaje = mensaje + `\n el tipo con mas cantidad de unidades es : ${tipoConMayorCantidad}`;
	mensaje = mensaje+`\n el promedio de compra de ${tipoConMayorCantidad} es ${promedioPorCompra}`;
	mensaje = mensaje+`\n hay ${cantidadTotalDeJabon} unidades de jabon en total`;

	alert(mensaje);
}

