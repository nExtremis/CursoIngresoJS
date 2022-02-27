/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo a validar ("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  //declaramos nuestras variables
  var productoActual;
  var cantidadDeBolsas;
  var precioPorBolsa;
  var respuesta;

  var descuento;
  var cantidadDeBolsasArena;
  var cantidadDeBolsasCal;
  var cantidadDeBolsasCemento;
  var cantidadTotalDeBolsas;
  var importeFinalBruto;
  var importeTotalConDescuento;

  //inicializo las variables necesarias
  respuesta = "si";
  cantidadDeBolsasArena = 0;
  cantidadDeBolsasCal = 0;
  cantidadDeBolsasCemento = 0;
  importeFinalBruto = 0;
  while (respuesta == "si"){
    //ingresamos el producto y validamos.
    productoActual = prompt("ingrese el producto").toLowerCase();
    console.log(productoActual);
    while (productoActual != "arena" && productoActual != "cal" && productoActual != "cemento") {
        prompt("Error.Ingrese el producto: ").toLowerCase();
    }
    //ingresamos la cantidad de bolsas del producto
    cantidadDeBolsas = prompt( "ingrese la cantidad de bolsas compradas");
    cantidadDeBolsas = parseInt(cantidadDeBolsas);
    while (cantidadDeBolsas <= 0 && Number.isNaN(cantidadDeBolsas) === true ) {
      cantidadDeBolsas = prompt( "ingrese la cantidad de bolsas compradas");
      cantidadDeBolsas = parseInt(cantidadDeBolsas);
    }
    
    // ingresamos el precio y validamos
    precioPorBolsa = prompt("Ingrese el precio del producto: ");
    precioPorBolsa = parseInt(precioPorBolsa);
    while (precioPorBolsa <= 0 && Number.isNaN(precioPorBolsa) === true) {
      precioPorBolsa = prompt("El Precio no puede ser cero.Ingrese el precio del producto: ");
      precioPorBolsa = parseInt(precioPorBolsa);
    }

    

    
    switch (productoActual) {
      case "arena":
        cantidadDeBolsasArena += cantidadDeBolsas;
        importeFinalBruto += (precioPorBolsa * cantidadDeBolsas);
        console.log(cantidadDeBolsas);
        console.log(cantidadDeBolsasArena);
        console.log(precioPorBolsa);
        console.log(importeFinalBruto);
        break;
      case "cal":
        cantidadDeBolsasCal += cantidadDeBolsas;
        importeFinalBruto += (precioPorBolsa * cantidadDeBolsas);
        console.log(cantidadDeBolsasCal);
        console.log(importeFinalBruto);
        break;
      case "cemento":
        cantidadDeBolsasCemento += cantidadDeBolsas;
        importeFinalBruto += (precioPorBolsa * cantidadDeBolsas);
        console.log(cantidadDeBolsasCemento);
        console.log(importeFinalBruto);
        break;
    }
    respuesta = prompt("Quiere Agregar otro producto?").toLowerCase();
  }
  cantidadTotalDeBolsas =cantidadDeBolsasArena + cantidadDeBolsasCal +cantidadDeBolsasCemento;
  //calculamos el descuento
  if (cantidadTotalDeBolsas > 30) {
    descuento = importeFinalBruto *0.25;
  } else if( cantidadTotalDeBolsas > 10 ){
    descuento = importeFinalBruto *0.15; 
  }else{
    descuento = 0;
  }
  // mostramos por pantalla el importe total bruto a pagar.
  importeTotalConDescuento = importeFinalBruto - descuento;
  alert(`El importe total bruto es: ${importeFinalBruto}$ `);
  if (descuento==0) {
    alert(`El importe final es: ${importeFinalBruto}$`);
  }else{
    alert(` El importe final es: ${importeTotalConDescuento}$`);
  }

  if(cantidadDeBolsasArena > cantidadDeBolsasCal && cantidadDeBolsasArena > cantidadDeBolsasCemento){
    alert(`El tipo con mas cantidad de bolsas es Arena`);
  }else if(cantidadDeBolsasCal > cantidadDeBolsasArena && cantidadDeBolsasCal < cantidadDeBolsasCemento){
    alert(`El tipo con mas cantidad de bolsas es Cal`);
  }else{
    alert(`El tipo con mas cantidad de bolsas es Cemento`);
  }
}  
