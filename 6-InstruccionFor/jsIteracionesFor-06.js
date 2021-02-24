function mostrar()
{
	alert("ok");
	let numeroPedido;
	let contadorPares;
	contadorPares = 0;
	let i;
	
	numeroPedido = prompt("ingrese un numero o chau para salir");
	/* if(numeroPedido == "chau") // quiero salir
	{
	  break;
	} */

	if(numeroPedido % 2 == 0)
	{
			for(i = numeroPedido; i == 0; i - 2) // bucle si es par
			{
				alert(i);
				contadorPares = numeroPedido / 2;
			}
			
		} else
		{
			i = i-1;
			alert(i);
			contadorPares = (numeroPedido - 1) / 2;
			// es impar
		}
		
		
	
	
	alert("el numero ingresado tiene pares" + contadorPares);


}//FIN DE LA FUNCIÓN