/*

Cecilia Calanna while 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let contadorNegativos = 0;
	let promedioNegativos;
	let sumaPositivos=0;
	let contadorPositivos=0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let diferencia;
	let promedioPositivos;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		if(numeroIngresado < 0) // el numero es menor a 0
		{
			// es negativo, ir acumulandolos y decir cuantos se ingresan (contarlos) 
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos = contadorNegativos + 1;
			

		} else if(numeroIngresado > 0)  // el numero es mayor a 0
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos = contadorPositivos + 1;
			// es positivo, ir acumulandolos y decir cuantos se ingresan (contarlos)
		} else if(numeroIngresado == 0) // el numero es un 0
		{
			contadorCeros = contadorCeros + 1;
			// sumar cuantos se ingresan
		}
		if(numeroIngresado % 2 == 0) // el numero es par
		{
			contadorPares = contadorPares + 1;
			// anotar la cantidad
		} 
		// Diferencia entre positivos y negativos, (positvos-negativos)
		diferencia = sumaPositivos - sumaNegativos;
		
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	//  calcular promedio de negativos y positivos
	if(contadorNegativos == 0)  // valido para no dividir por 0
	{
		promedioNegativos = "no ingresaste negativos";
	} else
	{
		promedioNegativos = sumaNegativos / contadorNegativos;

	}

	if(contadorPositivos == 0) // valido para no dividir por 0
	{
		promedioPositivos = "no ingresaste positivos";
	}else
	{
		promedioPositivos = sumaPositivos / contadorPositivos;

	}



	document.write("La suma de negativos es " + sumaNegativos + "<br>");
	document.write("La suma de positivos es " +sumaPositivos + "<br>");
	document.write("Ingresaste " + contadorNegativos + " negativos "  + "<br>");
	document.write("Ingresaste " + contadorPositivos +" positivos "  + "<br>");
	document.write("ingresaste " +contadorCeros + " ceros" + "<br>");
	document.write("La cantidad de pares es " +contadorPares + "<br>");
	document.write("El promedio de positivos es " +promedioPositivos + "<br>");
	document.write("El promedio de negativos es " +promedioNegativos + "<br>");
	document.write("La diferencia entre positivos y negativos es " +diferencia + "<br>");

	
}//FIN DE LA FUNCIÓN