/*


Cecilia Calanna
while 07

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

		
	while(respuesta == "si")
	{
		acumulador = acumulador + parseInt(prompt("ingrese numero"));
		contador = contador + 1;
		respuesta = prompt("quiere seguir ingresando?");
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN