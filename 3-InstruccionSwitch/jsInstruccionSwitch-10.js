function mostrar()
{
	let estacionIngresada = document.getElementById('txtIdEstacion').value;
	let destinoIngresado = document.getElementById('txtIdDestino').value;
	let mensajeSi;
	let mensajeNo;
	let respuesta;

	mensajeSi = "Se viaja";
	mensajeNo = "No se viaja";

	switch(estacionIngresada)
	{
		case "Invierno":
			if (destinoIngresado == "Bariloche")
			{
				// se viaja
				respuesta = mensajeSi;
			}
			else 
			{
				// no se viaja
				respuesta = mensajeNo;
			}
		break;
		case "Verano":
			if (destinoIngresado == "Cataratas" || destinoIngresado == "Mar del plata")
			{
				// se viaja
				respuesta = mensajeSi;
			}
			else 
			{
				// no se viaja
				respuesta = mensajeNo;
			}
		break;
		case "Otoño":
			// se viaja
			respuesta = mensajeSi;
		break;
		case "Primavera":
			if(destinoIngresado == "Bariloche")
			{
				// no se viaja
				respuesta = mensajeNo;
			}
			else 
			{
				// se viaja
				respuesta = mensajeSi;
			}
		break;

	} // fin del switch

	alert(respuesta);

}//FIN DE LA FUNCIÓN