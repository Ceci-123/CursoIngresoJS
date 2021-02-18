/*

Cecilia Calanna 
while 4 con 3 oportunidades

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{

	let numeroIngresado;
	let oportunidad;

	oportunidad = 0;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));

	while(numeroIngresado < 0 || numeroIngresado >10 && oportunidad <3)
	{
		numeroIngresado = prompt("te dije entre 0 y 10.");
		oportunidad = oportunidad + 1;


	}
	
	alert("probaste muchas veces. chau");

	/* let numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));

	while(numeroIngresado < 0 || numeroIngresado >10)
	{
		numeroIngresado = prompt("te dije entre 0 y 10.");
	}
	// alert("gracias");
	document.getElementById('txtIdNumero').value = numeroIngresado; */
	
}//FIN DE LA FUNCIÓN