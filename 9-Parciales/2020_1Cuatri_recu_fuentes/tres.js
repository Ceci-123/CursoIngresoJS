function mostrar()
{

	// Cecilia Calanna

	let respuesta;
	let tipoAnimal;
	let pelaje;
	let edad;
	let nombre; 
	let raza;     
	let peso;
	let estadoClinico;
	let temperatura;
	let flagPerroPesado;
	let perroMasPesado;
	let nombrePerroMasPesado;
	let contadorPerros;
	let contadorGatos;
	let contadorOtrasCosas;
	let porcentajeEnfermos;
	let contadorEnfermos;
	let nombreUltimaOtraCosa;
	let nombreSinPeloMenorTemperatura;
	let flagSinPeloMenorTemperatura;
	let SinPeloMenorTemperatura;
	let porcentajeGatoPerro;
	let contadorAdopcion;
	let contadorInternados;
	let estadoClinicoMenor;
	let acumuladorTodosLosPesos;
	let promedioTodosLosPesos;
	let nombreDelGatoSinPeloLiviana;
	let razaGatoSinPeloLiviano;
	let flagPrimerPesoGatos;
	let pesoMasLivianoGato;
	let acumuladorTemperaturaPerros;
	let acumuladorTemperaturaGatos;
	let acumuladorTemperaturasOtraCosa;
	let promedioTemperaturaPerros;
	let promedioTemperaturaGatos;
	let promedioTemperaturaOtrasCosas;
	let tipoConFiebre;

	respuesta = "si";
	flagPerroPesado = true;
	perroMasPesado = 0;
	nombrePerroMasPesado = "";
	contadorPerros = 0;
	contadorGatos = 0;
	contadorOtrasCosas = 0;
	porcentajeEnfermos = 0;
	contadorEnfermos = 0;
	nombreUltimaOtraCosa = "no se ingresaron";
	nombreSinPeloMenorTemperatura = "";
	flagSinPeloMenorTemperatura = true;
	SinPeloMenorTemperatura = 0;
	porcentajeGatoPerro = 0;
	contadorAdopcion = 0;
	contadorInternados = 0;
	estadoClinicoMenor = "";
	acumuladorTodosLosPesos = 0;
	promedioTodosLosPesos = "no aplica";
	nombreDelGatoSinPeloLiviana = "";
	razaGatoSinPeloLiviano = "";
	flagPrimerPesoGatos = true;
	pesoMasLivianoGato = 0;
	acumuladorTemperaturaPerros = 0;
	acumuladorTemperaturaGatos = 0;
	acumuladorTemperaturasOtraCosa = 0;
	promedioTemperaturaPerros = 0;
	promedioTemperaturaGatos = 0;
	promedioTemperaturaOtrasCosas = 0;
	tipoConFiebre = "";

	while(respuesta == "si")
	{
		tipoAnimal = prompt("ingrese si es gato perro u otra cosa");
		while(isNaN(tipoAnimal)== false || tipoAnimal != "gato" && tipoAnimal != "perro" && tipoAnimal != "otra cosa")
		{
			tipoAnimal = prompt("ingrese si es gato perro u otra cosa");
		}
		pelaje = prompt("tipo de pelaje (corto, largo , sin pelo");
		while(isNaN(pelaje)== false || pelaje != "corto" && pelaje != "largo" && pelaje != "sin pelo")
		{
			pelaje = prompt("ingrese tipo de pelaje (corto, largo , sin pelo");
		}
		edad = parseInt(prompt("edad de la mascota"));
		while(isNaN(edad)== true || edad < 1 || edad > 20)
		{
			edad = parseInt(prompt("edad de la mascota"));
		}
		nombre = prompt("como se llama ?");
		while(isNaN(nombre)== false)
		{
			nombre = prompt("como se llama ?");
		}
		raza = prompt("ingrese raza");
		while(isNaN(raza)== false)
		{
			raza = prompt("ingrese raza");
		}
		peso = parseFloat(prompt("ingrese peso"));
		while(isNaN(peso)== true)
		{
			peso = parseFloat(prompt("ingrese peso"));
		}
		estadoClinico = prompt(" estado enfermo,internado o adopcion")
		while(isNaN(estadoClinico)== false || estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion")
		{
			estadoClinico = prompt(" estado, enfermo,internado o adopcion")
		}
		temperatura = parseFloat(prompt("ingrese temperatura"))
		while(isNaN(temperatura)== true)
		{
			temperatura = parseFloat(prompt("ingrese temperatura"))
		}
		switch(tipoAnimal)
		{
			case "gato":
				contadorGatos = contadorGatos + 1;
				acumuladorTemperaturaGatos = acumuladorTemperaturaGatos + temperatura;
				if(pelaje == "sin pelo")
				{
					// ver lo del peso
					if(flagPrimerPesoGatos == true || peso < pesoMasLivianoGato)
					{
						flagPrimerPesoGatos = false;
						pesoMasLivianoGato = peso;
						nombreDelGatoSinPeloLiviana = nombre;
						razaGatoSinPeloLiviano = raza;
					}
				}
			break;
			case "perro":
				contadorPerros = contadorPerros + 1;
				acumuladorTemperaturaPerros = acumuladorTemperaturaPerros + temperatura;
				if(flagPerroPesado == true || peso > perroMasPesado)
				{
					flagPerroPesado = false;
					perroMasPesado = peso;
					nombrePerroMasPesado = nombre;

				}
			break;
			case "otra cosa":
				contadorOtrasCosas = contadorOtrasCosas + 1;
				acumuladorTemperaturasOtraCosa = acumuladorTemperaturasOtraCosa + temperatura;
				nombreUltimaOtraCosa = nombre;
			break;

		}  // fin switch animales
		acumuladorTodosLosPesos = acumuladorTodosLosPesos + peso;

		respuesta = prompt("desea seguir ingresando mascotas?? si/no")
	}  // fin while de carga

	// porcentaje de enfermos
		porcentajeEnfermos = (contadorEnfermos * 100) / (contadorGatos + contadorOtrasCosas + contadorPerros);

	// animal sin pelo y menos temperatura
	if(pelaje == "sin pelo")
	{
		if(flagSinPeloMenorTemperatura == true || temperatura < SinPeloMenorTemperatura)
		{
			flagSinPeloMenorTemperatura = false;
			SinPeloMenorTemperatura = temperatura;
			nombreSinPeloMenorTemperatura = nombre;
		}

	}  // fin if
	// porcentaje gato perro

	porcentajeGatoPerro = ((contadorGatos + contadorPerros) * 100) / contadorGatos + contadorPerros + contadorOtrasCosas;

	// switch estados clinicos
	switch(estadoClinico)
	{
		case "adopcion":
			contadorAdopcion = contadorAdopcion + 1;
		break;
		case "internado":
			contadorInternados = contadorInternados + 1;
		break;
		case "enfermo":
			contadorEnfermos = contadorEnfermos + 1;
		break;	

	}  // fin switch estado clinico

	if(contadorAdopcion > contadorEnfermos && contadorAdopcion > contadorInternados)
	{
		estadoClinicoMenor  = "adopcion";
	} else if(contadorEnfermos > contadorInternados)
	{
		estadoClinicoMenor = "enfermos";
	}else {
		estadoClinicoMenor = "internados";
	}

	// promedio pesos
	if(contadorGatos > 0)  // comparo con cualquiera para ver si se ingreso algun animal y no es 0
	{
		promedioTodosLosPesos = acumuladorTodosLosPesos / (contadorGatos + contadorPerros + contadorOtrasCosas);
	}

	// promedios temperatira
	promedioTemperaturaPerros = acumuladorTemperaturaPerros / contadorPerros;
	promedioTemperaturaGatos = acumuladorTemperaturaGatos / contadorGatos;
	promedioTemperaturaOtrasCosas = acumuladorTemperaturasOtraCosa / contadorOtrasCosas;

	if(promedioTemperaturaPerros > promedioTemperaturaGatos && promedioTemperaturaPerros > promedioTemperaturaOtrasCosas)
	{
		// perros
		tipoConFiebre = "perros";
	} else if(promedioTemperaturaGatos > promedioTemperaturaOtrasCosas)
	{
		// gatos
		tipoConFiebre = "gatos";
	} else 
	{
		// otras cosas
		tipoConFiebre = "otras cosas";
	}



 
	// informo
	document.write("el perro mas pesado es " + nombrePerroMasPesado + "<br/>");
	document.write("porcentaje de enfermos sobre el total de mascotas" + porcentajeEnfermos  + "<br/>");
	document.write("nombre de la ultima mascota de tipo otra cosa" + nombreUltimaOtraCosa  + "<br/>");
	document.write("animal sin pelo con menor temperatura corporal" + nombreSinPeloMenorTemperatura  + "<br/>");
	document.write("gatos y perros que porcentaje del total de mascotas son?" + porcentajeGatoPerro  + "<br/>");
	document.write("Que estado clinico tiene la menor cantidad de mascotas" + estadoClinicoMenor  + "<br/>");
	document.write("promedio de kilos de peso de tomando todas las mascotas" + promedioTodosLosPesos  + "<br/>");
	document.write("nombre y raza del gato sin pelos mas liviano" + nombreDelGatoSinPeloLiviana + razaGatoSinPeloLiviano  + "<br/>");
	document.write("tipo de mascota(gato o un perrro u otra cosa que tiene el mayor promedio de temperatura" + tipoConFiebre + "<br/>");
	//  corporal  "
	}
