function mostrar()
{
  alert("dos2");
  // variables
  let tipo;
  let cantidadBolsas;
  let precioPorBolsa;
  let respuesta;
  let acumuladorCantidadBolsas;
  let descuento;
  let importeTotal;
  let importeTotalVuelta;
  let importeConDescuento;
  let acumuladorBolsasCemento;
  let acumuladorBolsasArena;
  let acumuladorBolsasCal;
  let cosaMasVendida;
  let flagPrimerPrecio;
  let precioCaritoCemento;
  let precioCaritoCal;
  let precioCaritoArena;
  let informeMasCaro;

  // inicializo
  respuesta = "si";
  acumuladorCantidadBolsas = 0;
  descuento = 0;
  importeTotal = 0;
  importeTotalVuelta = 0;
  importeConDescuento = 0;
  acumuladorBolsasCemento = 0;
  acumuladorBolsasArena = 0;
  acumuladorBolsasCal = 0;
  cosaMasVendida = "";
  flagPrimerPrecio = true;
  precioCaritoCemento = 0;
  precioCaritoCal = 0;
  precioCaritoArena = 0;
  informeMasCaro = "";


  while(respuesta == "si")
  {
    tipo = prompt("ingrese arena cal cemento" );
    while(isNaN(tipo ==false) || tipo != "arena" && tipo != "cal" && tipo != "cemento")
    {
      tipo = prompt("error, ingrese arena cal cemento" );
    }
    cantidadBolsas = parseInt(prompt("ingrese cantidad de bolsas"));
    
    while(isNaN(cantidadBolsas == true))
    {
      cantidadBolsas = parseInt(prompt("error, ingrese cantidad de bolsas"));
     
    }
    precioPorBolsa = parseFloat(prompt("ingrese precio por bolsa"));
       // Precio por bolsa (más de cero )
    while(isNaN(precioPorBolsa == true) || precioPorBolsa < 0)
    {
      precioPorBolsa = parseFloat(prompt("error ingrese precio por bolsa")); 
       
    }

    acumuladorCantidadBolsas = acumuladorCantidadBolsas + cantidadBolsas;
    importeTotalVuelta = cantidadBolsas * precioPorBolsa;
    importeTotal = importeTotal + importeTotalVuelta;

    switch(tipo)
    {
      case "cemento":
        acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadBolsas;
        if(flagPrimerPrecio == true || precioPorBolsa > precioCaritoCemento)
        {
            flagPrimerPrecio = false;
            precioCaritoCemento = precioPorBolsa;
        }
      break;
      case "cal":
        acumuladorBolsasCal = acumuladorBolsasCal + cantidadBolsas;
        if(flagPrimerPrecio == true || precioPorBolsa > precioCaritoCal)
        {
            flagPrimerPrecio = false;
            precioCaritoCal = precioPorBolsa;
        }
      break;
      case "arena":
        acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsas;
        if(flagPrimerPrecio == true || precioPorBolsa > precioCaritoArena)
        {
            flagPrimerPrecio = false;
            precioCaritoArena = precioPorBolsa;
        }
      break;

    }
   respuesta = prompt("desea seguir cargando datos si/no");

  } // fin while de carga
  // console.log(cantidadBolsas + precioPorBolsa + typeof(cantidadBolsas));
  if(acumuladorCantidadBolsas > 10 && acumuladorCantidadBolsas < 30)
  {
     descuento = 0.15; // descuento de 15 %
  }
  if(acumuladorCantidadBolsas > 30)
  {
     descuento = 0.25; // tenes 25% de descuento 
  }

  importeConDescuento = importeTotal - (importeTotal * descuento);
  if(acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento)
  {
    // se vendio mas arena
    cosaMasVendida = "arena";
  } else if(acumuladorBolsasCal > acumuladorBolsasCemento)
  {
    // se vendio mas cal
    cosaMasVendida = "cal";
  } else
  {
    // se vendio mas cemento
    cosaMasVendida = "cemento";
  }

  if(precioCaritoArena > precioCaritoCal && precioCaritoArena > precioCaritoCemento)
  {
     informeMasCaro = "arena";
  } else if(precioCaritoCemento > precioCaritoCal)
  {
     informeMasCaro = "cemento";
  } else
  {
    informeMasCaro = "cal";
  }

  // informo
  console.log("importe total a pagar , bruto sin descuento" + importeTotal);
  console.log("importe con descuento" + importeConDescuento);
  console.log("lo mas vendodo es " + cosaMasVendida);
  console.log(" El tipo mas caro" + informeMasCaro);
}
