function mostrar()
{
  alert("dos");
  let respuesta = "si";
  let producto;
  let cantidadBolsas;
  let precioPorBolsa;
  let precioBruto;
  let descuento;
  let precioFinal;
  let acumuladorDeCemento = 0;
  let acumuladorDeCal = 0;
  let acumuladorDeArena = 0;
  let tipoMasCantidad;

  while(respuesta == "si")
  {
    do {
      producto = prompt("ingrese arena cal o cemento");
  
    } while(!(producto == "arena" || producto == "cal" || producto == "cemento"));

    cantidadBolsas = parseInt(prompt("ingrese cuantas bolsas"));

    do {
      precioPorBolsa = parseInt(prompt("ingrese precio por bolsa"));
    } while (precioPorBolsa < 0);
    respuesta = prompt("desea seguir ingresando datos?");

  } // fin del while de respuesta

  descuento = 0;
  if(cantidadBolsas > 10 && cantidadBolsas < 30) // bolsas mayor a 10
  {
    descuento = 0.15;// 15% de descuento
  }

  if(cantidadBolsas > 30) // bolsas mayor a 30
  {
    descuento = 0.25; // 25% de descuento
  }

  precioBruto = cantidadBolsas * precioPorBolsa;// importe bruto a pagar
  precioFinal = precioBruto - precioBruto * descuento// importe con descuentos

  switch(producto)
  {
    case "arena":
      acumuladorDeArena = acumuladorDeArena + cantidadBolsas;
    break;
    case "cal":
      acumuladorDeCal = acumuladorDeCal + cantidadBolsas;
    break;
    case "cemento":
      acumuladorDeCemento = acumuladorDeCemento + cantidadBolsas;
    break;

  }
  // comparo la cantidad de bolsas
  if(acumuladorDeCemento > acumuladorDeArena && acumuladorDeCemento > acumuladorDeCal) // hay mas cemento
  {
      tipoMasCantidad = "cemento";
  } else if(acumuladorDeArena > acumuladorDeCal && acumuladorDeArena > acumuladorDeCemento)  // hay mas arena
  {
      tipoMasCantidad = "arena";
  } else // hay mas cal
  {
    tipoMasCantidad = "cal";

  }


  alert("Precio bruto $ " + precioBruto + "precio con descuentos $ " + precioFinal);
  alert(" el tipo con mas cantidad de bolsas es"+ tipoMasCantidad);

}
