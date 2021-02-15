/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos;
let mensaje;
let usuarioDice;
let diferencia;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random()*100);
	contadorIntentos = 0; 
	
}

function verificar()
{
	usuarioDice = parseInt(document.getElementById('txtIdNumero').value);
	if(usuarioDice == numeroSecreto) // acerto
	{
        switch(contadorIntentos)
		{
			case 1:
				mensaje = "acertaste usted es un Psíquico";
			break;	
			case 2:
				mensaje = "acertaste excelente percepción";
			break;
			case 3:
				mensaje = "acertaste Esto es suerte";
			break;
			case 4:
				mensaje = "acertaste Excelente técnica";
			break;
			case 5:
				mensaje = "acertaste usted está en la media";
			break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				mensaje = "acertaste falta técnica";
			break;
			default:
				mensaje = "acertaste afortunado en el amor!!";
			break;

		} // fin del switch
		
	} else if(usuarioDice < numeroSecreto) // le falta
	{
        diferencia = numeroSecreto - usuarioDice;
		contadorIntentos = contadorIntentos + 1;
		mensaje = "te falta" + diferencia;
	} else // se paso
	{
        diferencia = usuarioDice - numeroSecreto;
		contadorIntentos = contadorIntentos + 1;
		mensaje = "se paso" + diferencia;
	}
	
	alert(mensaje);
	document.getElementById('txtIdIntentos').value = contadorIntentos;

}