/*

Cecilia Calanna 
while 4

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while(numeroIngresado < 0 || numeroIngresado >10)
	{
		numeroIngresado = prompt("te dije entre 0 y 10.");
	}
	alert("gracias");
	
}//FIN DE LA FUNCIÓN