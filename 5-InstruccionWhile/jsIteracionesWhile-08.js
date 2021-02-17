/*
Cecilia Calanna
while 08

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	
	numero=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si")
	{
		numero = parseInt(prompt("decime un numero"));
		if(numero > 0) 
		{
			sumaPositivos = sumaPositivos + numero;    // es positivo
		} else 
		{
			multiplicacionNegativos = multiplicacionNegativos * numero;  // es negativo
		}
		respuesta = prompt("desea seguir ingresando numeros?");
	}

	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN