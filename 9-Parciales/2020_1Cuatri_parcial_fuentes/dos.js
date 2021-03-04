{/* Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
<br> Tipo validad("arena";"cal";"cemento") 
<br> Cantidad de bolsas,
    <br> Precio por bolsa (más de cero ),
    <br> 
    <br> Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
<br> Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
  <br>a)
  El importe total a pagar , bruto sin descuento y...
  <br>b)
  el importe total a pagar con descuento(solo si corresponde)
  <br>d)
  Informar el tipo con mas cantidad de bolsas.		
  <br>f)
  El tipo mas caro */}

function mostrar()
{
  var respuesta;
  var tipoIngresado;
  var cantidadBolsas;
  var precioPorBolsa;
  var acumuladorCantidadBolsas;
  var importeTotal;
  var descuento;
  var importeConDescuento;
  var acumuladorCemento;
  var acumuladorCal;
  var acumuladorArena;
  var tipoMasVendido;
  var tipoMasCaroCemento;
  var tipoMasCaroArena;
  var tipoMasCaroCal;
  var tipoMasCaro;


  acumuladorCantidadBolsas = 0;
  respuesta = "si"; 
  importeTotal = 0;
  descuento = 0;
  acumuladorCemento =0;
  acumuladorCal=0;
  acumuladorArena=0;
  cementoMasCaro = 0;
  tipoMasCaroCemento = 0;
  tipoMasCaroArena = 0;
  tipoMasCaroCal = 0;

  while(respuesta == "si")
  {
    tipoIngresado = prompt("ingrese tipo");
    while(isNaN(tipoIngresado) == false || tipoIngresado != "arena" && tipoIngresado != "cemento" && tipoIngresado != "cal")
    {
      tipoIngresado = prompt("error, vuelva a ingresar");
    }

    cantidadBolsas = prompt("ingrese cantidad de bolsas");
    cantidadBolsas =parseInt(cantidadBolsas);
    while(isNaN(cantidadBolsas) == true)
    {
      cantidadBolsas = prompt("Error, ingrese cantidad de bolsas");
      cantidadBolsas =parseInt(cantidadBolsas);
    }

    precioPorBolsa = prompt("precio por bolsa");
    precioPorBolsa = parseFloat(precioPorBolsa);
    while(isNaN(precioPorBolsa) == true || precioPorBolsa < 0)
    {
      precioPorBolsa = prompt("Error, ingrese precio de bolsa");
      precioPorBolsa =parseInt(precioPorBolsa);
    }
    respuesta = prompt("desea seguir ingresando?");
    acumuladorCantidadBolsas = acumuladorCantidadBolsas + cantidadBolsas;

    switch(tipoIngresado)
    {
      case "cemento":
        if(acumuladorCemento == 0 || precioPorBolsa > tipoMasCaro)  // paso x primera vez o el precio es mayor
        {
            tipoMasCaroCemento = precioPorBolsa;
        }
        acumuladorCemento = acumuladorCemento + 1;
      break;
      case "cal":
        if(acumuladorCal == 0 || precioPorBolsa > tipoMasCaro)  // paso x primera vez o el precio es mayor
        {
          tipoMasCaroCal = precioPorBolsa;
        }
        acumuladorCal = acumuladorCal + 1;
      break;
      case "arena":
        if(acumuladorArena == 0 || precioPorBolsa > tipoMasCaro)  // paso x primera vez o el precio es mayor
        {
          tipoMasCaroArena = precioPorBolsa;
        }
        acumuladorArena = acumuladorArena + 1;
      break;
    }
  } // fin del while de ingreso

  // calculo importe total

  if(cantidadBolsas > 10 && cantidadBolsas < 30) // si compro mas de 10 bolsas 15 %
  {
    descuento = 0.15;
  }
  if(cantidadBolsas > 30) // si compro mas de 30 bolsas 25 %
  {
    descuento = 0.25;
  }
  
  importeTotal = cantidadBolsas * precioPorBolsa;
  importeConDescuento = importeTotal - (importeTotal * descuento);

  if(acumuladorCemento > acumuladorArena && acumuladorCemento > acumuladorCal)
  {
      tipoMasVendido = "cemento";     // el mas vendido es cemento
  } else if(acumuladorArena > acumuladorCal)
  {
    // sde vendio mas arena
    tipoMasVendido = "arena";
  } else
  {
      // se vendio mas cal
      tipoMasVendido = "cal";
  }

  if(tipoMasCaroArena > tipoMasCaroCemento && tipoMasCaroArena > tipoMasCaroCal)
  {
    tipoMasCaro = "arena";
  } else if(tipoMasCaroCemento > tipoMasCaroCal)
  {
    tipoMasCaro = "cemento";
  } else
  {
    tipoMasCaro ="cal";
  }

   alert("el importe total a pagar es" + importeTotal);
   alert("el importe con descuento es " + importeConDescuento);
   alert("lo que mas se vendio es "+ tipoMasVendido);
   alert("el tipo mas caro es " + tipoMasCaro);

  
}
