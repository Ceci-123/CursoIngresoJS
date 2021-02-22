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
	let flag = 0;
	
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
			flag = 1;
		}
		respuesta = prompt("desea seguir ingresando numeros?");
	}

	document.getElementById('txtIdSuma').value=sumaPositivos;

	if(flag == 0)
	{
		multiplicacionNegativos = 0;
	}
		
	
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;
}//FIN DE LA FUNCIÓN