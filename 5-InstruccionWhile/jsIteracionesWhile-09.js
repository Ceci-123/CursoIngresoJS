/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		if(banderaDelPrimero=="es el primero") // es la primera vez q paso
		{
			console.log(banderaDelPrimero);
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "otra cosa";
			console.log(numeroMaximo);
			console.log(numeroMinimo);
			console.log(banderaDelPrimero);

		}
		
		// no es la primera vez que paso
		if(numeroIngresado > numeroMaximo) // el que ingreso es mayor al maximo
		{
			// el que ingreso es mi nuevo maximo
			numeroMaximo = numeroIngresado;
			console.log(numeroMaximo);
		} else  // el que ingreso es menor al maximo
			{
				if(numeroIngresado < numeroMinimo)  // el que ingreso es menor que el minimo
				// el que ingreso es mi nuevo minimo
					numeroMinimo = numeroIngresado;
					console.log(numeroMinimo);
			}
			
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
 
}   //FIN DE LA FUNCIÓN