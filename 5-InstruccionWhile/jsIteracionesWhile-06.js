// Cecilia Calanna
// while 06

function mostrar()
{
	let contador;
	let acumulador;
	
	contador=0;
	acumulador=0;

	while(contador < 5)
	{
		acumulador = acumulador + parseInt(prompt("ingrese un numero"));
		contador = contador + 1;
	}
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN