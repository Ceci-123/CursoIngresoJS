function mostrar()
{
	alert("tres");
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;
	let flagTemperatura = 0;
	let mayorTemperatura = 0;
	let nombreMayorTemperatura;
	let contadorViudosMayores = 0;
	let solterosViudosHombres = 0;
	let viejosAfiebrados = 0;
	let promedio = 0;
	let acumuladorEdad = 0;
	let contadorSolterosHombres = 0;
	let contadorViudos = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		nombre = prompt("ingrese su nombre");
		edad = parseInt(prompt("ingrese su edad"));
		sexo = prompt("ingrese sexo f o m");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error, ingrese sexo f o m");
		}
		estadoCivil = prompt("ingrese estado civil soltero, casado o viudo");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error, ingrese estado civil soltero, casado o viudo");
		}
		temperatura = parseInt(prompt("ingrese temperatura"));
		if(flagTemperatura == 0 || temperatura > mayorTemperatura )
		{
			flagTemperatura = 1;
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;

		}
		respuesta = prompt("desea seguir ingresando datos? si no");

		if(edad > 21 && estadoCivil == "viudo") // contador de mayores viudos
		{
			contadorViudosMayores = contadorViudosMayores + 1;
		}
		if((estadoCivil == "soltero" && sexo == "m") || (estadoCivil == "viudo" && sexo == "m")) // contador de solteros y viudos hombres
		{
			solterosViudosHombres = solterosViudosHombres + 1;
		}
		if(edad > 60 && temperatura > 38) // contador mas de 60 años y mas de 38 grados
		{
			viejosAfiebrados = viejosAfiebrados + 1;
		}	
		if(estadoCivil == "soltero" & sexo == "m") // promedio edad solteros hombres
		{
			acumuladorEdad = acumuladorEdad + edad;
			contadorSolterosHombres = contadorSolterosHombres + 1;

		}
	} // fin del while de carga}
	// calculo promedio edad de solteros hombres
	promedio = acumuladorEdad / contadorSolterosHombres;

	alert("el nombre de la persona con mayor temperatura es" + nombreMayorTemperatura);
	alert(" tenemos a bordo " + contadorViudos + "viudos")
	alert("hombres solteros y viudos" + solterosViudosHombres);
	alert(" hay hombres mayores con fiebre" + viejosAfiebrados);
	alert("promedio de edad de hombres solteros" + promedio);

}
