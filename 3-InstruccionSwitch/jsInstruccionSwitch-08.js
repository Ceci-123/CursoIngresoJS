function mostrar()
{
	let destinoIngresado = document.getElementById('txtIdDestino').value;
	let mensaje;
	// alert(destinoIngresado);

	switch(destinoIngresado){
		case "Cataratas":
		case "Mar del plata":
			mensaje = "Calor";
		break;
		case "Ushuaia":
		case "Bariloche":
			mensaje = "Frio";
		break;	
		
		
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN