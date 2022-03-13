/*
Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “América”) --- validamos
-Cantidad de vacunas (entre 500000 y 2500000) ---- validamos
-Costo del vuelo (entre 1 millón y 5 millones de pesos)---- validamos
Informar:
a- El origen que envió menor cantidad de vacunas
b- El total sin descuentos a pagar por los gastos de los viajes
c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con
Descuento.
*/


function mostrar()
{


    //declaro las variables principales
    let vacunaOrigen ;
    let cantidadVacunas;
    let costoVuelo;
    let respuesta = "s";;

    let cantidadVacunasAsia = 0;
    let cantidadVacunasEuropa = 0;
    let cantidadVacunasAmerica = 0;
    let origenConMenorCantidadVacunas ;
    let costoTotalVuelosAmerica = 0;
    let costoTotalVuelosAsia = 0;
    let costoTotalVuelosEuropa = 0;
    let costoTotalSinDescuento = 0;
    let cantidadTotalVacunas = 0;
    let costoTotalConDescuento = 0;

    let mensaje;

    estadoCivil != "soltero"
    
    while(respuesta = "s"){ //
        // ingresamos datos
        //ingreso el origen de la vacuna 
        vacunaOrigen = prompt("Ingrese el origen:").toLowerCase();
        while(vacunaOrigen != "asia" && vacunaOrigen != "europa" && vacunaOrigen != "america"){ // 
            vacunaOrigen = prompt("Error.Ingrese el origen:").toLowerCase();
        }
        //ingreso cantidad de vacunas
        cantidadVacunas = parseInt(prompt("Ingrese la cantidad de vacunas:"));
        while(cantidadVacunas<500000 || cantidadVacunas>2500000){//entra al while si es true
            cantidadVacunas = parseInt(prompt("Error.Ingrese la cantidad de vacunas:"));
        }
        //ingreso el costo del vuelo.
        costoVuelo = parseInt(prompt("Ingrese el costo del vuelo:"));
        while (costoVuelo<1000000 || costoVuelo>5000000){
            costoVuelo = parseInt(prompt("Error.Ingrese el costo del vuelo:"));
        }
        //procesamos los datos ingresados
        switch (vacunaOrigen){
            case "asia":
                costoVueloAsia = costoTotalVuelosAsia + costoVuelo; // acumula el costo de los viajes de origen Asia.
                cantidadVacunasAsia = cantidadVacunasAsia + cantidadVacunas; // acumula la cantidad de vacunas asiaticas
                cantidad
                break;
            case "europa":
                costoVueloEuropa = costoTotalVuelosEuropa + costoVuelo;
                cantidadVacunasEuropa = cantidadVacunasEuropa + cantidadVacunas;
                break;
            case "america":
                costoVueloAmerica = costoTotalVuelosAmerica + costoVuelo;
                cantidadVacunasAmerica = cantidadVacunasAmerica + cantidadVacunas;
                break;     
        }          
    }
    //resolvemos con los datos procesados
    if(cantidadVacunasAsia < cantidadVacunasAmerica && cantidadVacunasAsia < cantidadVacunasEuropa){
        origenConMenorCantidadVacunas = "asia"; 
    }else if(cantidadVacunasAmerica < cantidadVacunasAsia && cantidadVacunasAmerica<cantidadVacunasEuropa){
        origenConMenorCantidadVacunas = "america";
    }else{
        origenConMenorCantidadVacunas = "europa";
    }
    // calculamos el total de costos de todos los vuelos.
    costoTotalSinDescuento = costoTotalVuelosAmerica + costoTotalVuelosAsia + costoTotalVuelosEuropa;
    //
    cantidadTotalVacunas = cantidadVacunasEuropa+ cantidadVacunasAsia + cantidadVacunasAmerica
    if(cantidadTotalVacunas>10000000){
        costoTotalConDescuento =  costoTotalSinDescuento * 0.25;
    }else if(cantidadVacunas>=5000000 && cantidadVacunas<=10000000){ // tome el inclusive para ambos
        costoTotalConDescuento =  costoTotalSinDescuento * 0.15;
    }else{                              
        costoTotalConDescuento = costoTotalSinDescuento; // queda pendiente 

    }
    mensaje =  `El origen que envio menos cantidad de vacunas es: ${origenConMenorCantidadVacunas}`;
    mensaje = mensaje + `\n El total sin descuento a pagar por los gastos de viajes es: ${costoTotalSinDescuento}$`;
    mensaje = mensaje + `\n El costo con descuento es: ${costoTotalConDescuento}$`;

    document.write(mensaje);
}

