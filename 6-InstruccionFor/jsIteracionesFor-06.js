function mostrar()
{

	// Cecilia Calanna for 6
	alert("ok");
	let numeroPedido;
	let contadorPares;
	contadorPares = 0;
	let i;
	
	numeroPedido = prompt("ingrese un numero");
	numeroPedido = parseInt(numeroPedido);
	
	for(i = 1 ; i < numeroPedido; i ++) 
		{
			if(i % 2 == 0) // si es par
			{
				alert(i);
				contadorPares = contadorPares + 1;
			}	
				
		}
		
	alert("el numero ingresado tiene pares" + contadorPares);


}//FIN DE LA FUNCIÓN