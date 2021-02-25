function mostrar()
{
	// alert("ok");
	let numeroIngresado;
	let cantidadDivisores;

	cantidadDivisores = 1;
	numeroIngresado = parseInt(prompt("ingrese numero"));

	for(let i = 1; i <= numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			cantidadDivisores = cantidadDivisores + 1;
		}

	}
	if(cantidadDivisores == 2)
	{
		alert("es primo");
	} else
	{
		alert("no es primo");
	}
	

}//FIN DE LA FUNCIÓN