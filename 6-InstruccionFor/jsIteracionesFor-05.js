function mostrar()
{
	alert("ok");
	let respuesta;
	let i;
	for(i = 0; i < 10; i++)
	{
		
		respuesta = prompt("ingresa un numero o 9 para salir");
		
		if(respuesta == 9)
		{
			break;
		} else
		{
			respuesta = prompt("ingresa un numero o 9 para salir");
		}
		
	}


}//FIN DE LA FUNCIÓN