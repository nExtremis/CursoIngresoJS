/*
Una empresa de venta de cosméticos necesita un programa que permita la carga de productos
vendidos,
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
• Vendedor: Juan, María, Lucrecia ---- validamos
• Tipo producto: Perfume, Shampoo o Maquillaje ---- validamos
• Importe de la venta (Numero mayor que cero) ---- validamos
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María
c. El importe más barato junto con el vendedor que lo vendió.
d. El nombre del vendedor con menor comisión.
*/
function mostrar()
{
	//declaramos variables principales
	let vendedor ;
	let tipoProducto ;
	let importeVenta;
	let respuesta = "s";
	let contador = 0;
	let bandera = 1;
	//variables de problemas
	let ventasJuan = 0;
	let ventasMaria = 0;
	let ventasLucrecia = 0;
	let promedioVentasJuan = 0;
	let promedioVentasMaria = 0;
	let promedioVentasLucrecia = 0;
	let cantidadDePerfumesMaria = 0;
	let importeMasBarato;
	let vendedorDelImpMasBarato;
	let totalImportesJuan = 0;
	let totalImportesMaria = 0;
	let totalImportesLucrecia = 0;
	let comisionJuan = 0;
	let comisionLucrecia =0;
	let comisionMaria = 0;
	let vendedorMenorComision ;

	while (respuesta == "s"){
		//validamos el vendedor
		vendedor = prompt("Ingrese el nombre del vendedor: ").toLowerCase();
		while(vendedor!="juan" && vendedor != "maria" && vendedor != "lucrecia"){
			vendedor = prompt("Error vendedor inexistente. Ingrese el nombre del vendedor: ").toLowerCase();
		}
		//validamos el tipo de producto
		tipoProducto = prompt("Ingrese el tipo del producto: Perfume, Shampoo o Maquillaje");
		while( tipoProducto != "perfume" && tipoProducto!="shampoo" && tipoProducto != "maquillaje"){
			vendedor = prompt("Error tipo de producto inexistente.Ingrese el tipo del producto: Perfume, Shampoo o Maquillaje ").toLowerCase();
		}
		//validamos el importe de venta
		importeVenta = parseInt(prompt("Ingrese el importe de venta: "));
		while(importeVenta < 1 && Number.isNaN(importeVenta) == true){
			importeVenta = parseInt(prompt("Error.Ingrese el importe de venta: "));
		}
		switch (vendedor){
			case "juan":
				totalImportesJuan += importeVenta;
				ventasJuan++;
				break;
			case "maria":
				totalImportesMaria += importeVenta;
				//cantidad de perfumes que vendio maria.
				if(tipoProducto == "perfume"){
					cantidadDePerfumesMaria++;
				}
				ventasMaria++;
				break;
			case "lucrecia":
				totalImportesLucrecia += importeVenta;
				ventasLucrecia++;
				break;		
		}
		// el importe mas barato de todos, y el vendedor que lo vendio.
		if(bandera == 1){
			importeMasBarato = importeVenta;
			vendedorDelImpMasBarato = vendedor;
			bandera = 0;
		}else if(importeVenta > importeMasBarato){
			importeMasBarato =  importeVenta;
			vendedorDelImpMasBarato = vendedor;
		}
		contador++;
	}
	//promedio de ventas de cada vendedor
	promedioVentasJuan = ventasJuan/contador;
	promedioVentasMaria = ventasMaria/contador;
	promedioVentasLucrecia = ventasLucrecia/contador;
	//calculamos comisiones de los vendedores
	//comision juan
	if(totalImportesJuan <=10000 && totalImportesJuan>= 5000){
		comisionJuan= totalImportesJuan *0.15;
	}else if(totalImportesJuan >10000){
		comisionJuan= totalImportesJuan *0.20;
	}else{
		comisionJuan= totalImportesJuan *0.05;
	}
	//comision maria
	if(totalImportesMaria <=10000 && totalImportesMaria>= 5000){
		comisionMaria= totalImportesMaria *0.15;
	}else if(totalImportesMaria >10000){
		comisionMaria= totalImportesMaria *0.20;
	}else{
		comisionMaria= totalImportesMaria *0.05;
	}	
	//comision lucrecia
	if(totalImportesLucrecia <=10000 && totalImportesLucrecia>= 5000){
		comisionLucrecia= totalImportesLucrecia *0.15;
	}else if(totalImportesLucrecia >10000){
		comisionLucrecia= totalImportesLucrecia *0.20;
	}else{
		comisionLucrecia= totalImportesLucrecia*0.05;
	}
	//vendedor menor comision
	if(comisionLucrecia < comisionJuan&& comisionLucrecia < comisionMaria){
		vendedorMenorComision = "lucrecia";
	}else if(comisionJuan < comisionLucrecia && comisionJuan < comisionMaria){
		vendedorMenorComision = "juan";
	}else{
		vendedorMenorComision = "maria";
	}
	//mostramos resultados en mensaje
	mensaje = `El promedio de ventas de cada vendedor es:<br> Lucrecia: ${promedioVentasLucrecia}<br>Juan: ${promedioVentasJuan}<br>Maria: ${promedioVentasMaria} <br>`;
	mensaje = mensaje + `Maria vendio ${cantidadDePerfumesMaria} perfumes <br>`;
	mensaje = mensaje + `El importe más barato es de ${importeMasBarato} y lo vendio ${vendedorDelImpMasBarato} <br>`
	mensaje = mensaje + `EL vendedor con la comision mas baja es ${vendedorMenorComision}`

	document.write(mensaje);
	
}

