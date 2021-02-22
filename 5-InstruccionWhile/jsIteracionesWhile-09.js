/*

Cecilia Calanna while 9
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero=true;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("ingrese un numero"));
				
		
		if(banderaDelPrimero== true || numeroIngresado > numeroMaximo) // el que ingreso es mayor al maximo
		{
			// el que ingreso es mi nuevo maximo
			numeroMaximo = numeroIngresado;
			console.log(numeroMaximo);
		}
		if(banderaDelPrimero== true || numeroIngresado < numeroMinimo)  // el que ingreso es menor que el minimo
				// el que ingreso es mi nuevo minimo
					numeroMinimo = numeroIngresado;
					console.log(numeroMinimo);
					banderaDelPrimero = false;
		
		
		respuesta=prompt("desea continuar?");
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
 
}   //FIN DE LA FUNCIÓN