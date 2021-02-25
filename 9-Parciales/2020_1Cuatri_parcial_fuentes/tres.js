function mostrar()
{
	// Cecilia Calanna practica de examen

	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;
	let mayorTemperatura;
	let nombrePersonaConMasTemperatura;
	let mayoresViudos;
	let contadorHombreSolteroViudo;
	let contadorMayoresFiebre;
	let acumuladorEdad;
	let contadorSolterosHombres;
	let promedio;

	respuesta = "si";
	mayorTemperatura = 0;
	mayoresViudos = 0;
	contadorHombreSolteroViudo = 0;
	contadorMayoresFiebre = 0;
	acumuladorEdad = 0;
	contadorSolterosHombres = 0;

	while(respuesta == "si")
	{
		// pido nombre
		nombre = prompt("ingrese su nombre");
		while(isNaN(nombre)== false)
		{
			nombre = prompt("Error, ingrese su nombre");
		}

		// pido edad
		edad = parseInt(prompt("ingrese edad"));
		while(isNaN(edad) == true)
		{
			edad = parseInt(prompt("Error, ingrese edad"));
		}
		// pido sexo ("f" o "m") 
		sexo = prompt("ingrese su sexo f o m");
		while(isNaN(sexo)== false || sexo != "m" && sexo != "f")
		{
			sexo = prompt("Error, ingrese su sexo f o m");
		}
		// pido estado civil("soltero", "casado" o "viudo")
		estadoCivil = prompt("ingrese su estado civil soltero, casado o viudo");
		while(isNaN(estadoCivil)== false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("ingrese su estado civil soltero, casado o viudo");
		}
		// pido temperatura
		temperaturaCorporal = parseInt(prompt("ingrese temperatura"));
		while(isNaN(temperaturaCorporal) == true)
		{
			temperaturaCorporal = parseInt(prompt("Error, ingrese temperatura"));
		}

		// averiguo nombre persona con mas temperatura
		if(temperaturaCorporal > mayorTemperatura)
		{
			mayorTemperatura = temperaturaCorporal;
			nombrePersonaConMasTemperatura = nombre;

		}
		/////// 
		switch(estadoCivil)
		{
			case "casado":
			break;
			case "soltero":
				if(sexo == "m")   // guardo la edad para lo del promedio
				{
					acumuladorEdad = acumuladorEdad + edad;
					contadorSolterosHombres = contadorSolterosHombres + 1;
				}
			break;
			case "viudo":
				if(edad > 17)
				{
					mayoresViudos = mayoresViudos + 1;
				}
			break;

		}  // fin del switch
		// cuento mayores con fiebre
		if(edad > 59 && temperaturaCorporal > 38)
		{
			contadorMayoresFiebre = contadorMayoresFiebre + 1;
		}

		///////
		respuesta = prompt("desea seguir ingresando datos? si/no");

		

	}  // fin del while de ingreso

	// promedio edad solteros

	promedio = acumuladorEdad / contadorSolterosHombres;



	alert("La persona con mas temperatura es " + nombrePersonaConMasTemperatura + " tenemos a bordo " + mayoresViudos + " mayores viudos" + " tenemos" + contadorMayoresFiebre + " mayores con fiebre" + " y " + contadorHombreSolteroViudo + "hombres solteros o viudos" + " el promedio de edad de los hombres solteros es " + promedio);

	

}
