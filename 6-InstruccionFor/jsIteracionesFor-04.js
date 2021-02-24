function mostrar()
{
	alert("ok");
	let respuesta;
	let i;

	for(i = 0; i< 10;i++ )
	{
		alert("hola");
		respuesta = prompt("ingresa hola y chau para salir");
		
		if(respuesta == "chau") // no quiere saludar
		{
			break;
		}
	}



}//FIN DE LA FUNCIÓN