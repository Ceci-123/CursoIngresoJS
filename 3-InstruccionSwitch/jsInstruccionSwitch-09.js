// Cecilia Calanna
// switch 9 

function mostrar()
{
	let destino = document.getElementById('txtIdDestino').value;
	const TARIFA = 15000;
	let mensaje;
	let promo;
	let estacionIngresada = document.getElementById('txtIdEstacion').value;
	mensaje = "Tu viaje cuesta $ "
	// alert(estacionIngresada);

	if(estacionIngresada == "Verano") // elegi verano
	{
		switch(destino)
		{
			case "Bariloche":
				promo = TARIFA - TARIFA * 0.20;
			break;
			case "Cataratas":
			case "Cordoba":
				promo = TARIFA + TARIFA * 0.10;
			break;
			case "Mar del plata":
				promo = TARIFA + TARIFA * 0.20;
			break;

		} // fin del switch de verano

	} // fin del verano

	if(estacionIngresada == "Invierno")  // elegi invierno
	{
		switch(destino)
		{ 
			case "Bariloche":
				promo = TARIFA + TARIFA * 0.20;
			break;
			case "Cataratas":
			case "Cordoba":
				promo = TARIFA - TARIFA * 0.10;
			break;
			case "Mar del plata":
				promo= TARIFA - TARIFA * 0.20;
			break;

		} // fin del switch de invierno

	} // fin invierno

	if (estacionIngresada == "Otoño" || estacionIngresada == "Primavera")  // elegi otoño o primavera
	{
		switch(destino)
		{
			case "Cordoba":
				promo = TARIFA;
			break;
			case "Mar del plata":
			case "Cataratas":
			case "Bariloche":
				promo = TARIFA + TARIFA * 0.10;
			break;

		} // fin del switch de otoño o primavera

	} // fin otoño o primavera

	alert(mensaje + promo);

}//FIN DE LA FUNCIÓN