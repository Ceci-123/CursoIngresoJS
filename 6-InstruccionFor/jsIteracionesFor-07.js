function mostrar()
{

	// Cecilia Calanna FOR 7 
	let numeroIngresado;
	let cantidadDivisores;

	cantidadDivisores = 1;
	numeroIngresado = parseInt(prompt("ingrese numero"));

	for(let i = 1; i < numeroIngresado; i++)
	{
		// mostrar divisores y cantidad
		if(numeroIngresado % i == 0)
		{
			alert(i);
			cantidadDivisores = cantidadDivisores + 1;
		}

	}
	alert(cantidadDivisores);

}//FIN DE LA FUNCIÓN