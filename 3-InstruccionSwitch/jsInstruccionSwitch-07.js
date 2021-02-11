function mostrar()
{
	let mensaje;
	let destinoIngresado = document.getElementById('txtIdDestino').value;
	// alert(destinoIngresado);

	switch(destinoIngresado){
		case "Cataratas":
			mensaje = "Norte";
		break;
		case "Ushuaia":
			mensaje = "Sur";
		break;	
		case "Mar del plata":
			mensaje = "Este";
		break;	
		case "Bariloche":
			mensaje = "Oeste";
		break;	
		
		
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN