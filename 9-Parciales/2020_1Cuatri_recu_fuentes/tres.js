function mostrar()
{
	alert("tres 3");
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta = "si";
	let masTemperatura = 0;
	let masNacionalidad;
	let contadorSolteros = 0;
	let contadorMujeres = 0;
	let contadorAbuelosAfiebrados = 0;
	let promedio;
	let acumuladorEdadCasadas = 0;
	let cantidadCasadas = 0;

	do
	{
		nombre = prompt("ingrese su nombre");
		nacionalidad = prompt("ingrese nacionalidad");
		edad = parseInt(prompt("ingrese su edad"));
		sexo = prompt("ingrese sexo m o f");
		while(sexo != "m" && sexo != "f")
		{
			sexo = prompt("Error, ingrese sexo m o f");
		}   // while validacion sexo
		estadoCivil = prompt("ingrese estado civil, soltero, casado o viudo");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" )
		{
			estadoCivil = prompt("Error, ingrese estado civil, soltero, casado o viudo");
		}  // while validacion estadocivil
		temperatura = parseInt(prompt("ingrese su temperatura"));
		if(temperatura > masTemperatura)
		{
			masTemperatura = temperatura;
			masNacionalidad = nacionalidad;
		}   // fin del if de comparar temperatura
		if(estadoCivil == "soltero" && edad > 17)
		{
			contadorSolteros = contadorSolteros + 1;
		}  // fin del if de contar solteros
		if((sexo == "m" && estadoCivil == "viudo") || (sexo == "m" && estadoCivil == "soltero"))
		{
			contadorMujeres = contadorMujeres + 1;
		} // fin del if de contar mujeres
		if(edad > 60 && temperatura > 38)
		{
			contadorAbuelosAfiebrados = contadorAbuelosAfiebrados + 1;
		}  // fin del if de abuelos afiebrados
		if(sexo == "f" && estadoCivil == "casado")
		{
			cantidadCasadas = cantidadCasadas + 1;
			acumuladorEdadCasadas = acumuladorEdadCasadas + edad;
			
		}  // fin del if contador casadas

		respuesta = prompt("desea seguir ingresando ? si / no");
	} while(respuesta == "si");  // fin del while de ingreso

	promedio = acumuladorEdadCasadas / cantidadCasadas;
	alert("nacionalidad de la persona con mas temperatura" + masNacionalidad);
	alert("solteros mayores" + contadorSolteros);
	alert("cuantas mujeres solteras viudas" + contadorMujeres);
	alert("cuantos abuelos afiebrados " + contadorAbuelosAfiebrados);
	alert("promedio edad casadas" + promedio);
	

}
