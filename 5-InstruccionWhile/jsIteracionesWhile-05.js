/*

Cecilia Calanna
while 05

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Error !  ingrese f ó m .");
		console.log(sexoIngresado);
	}

	document.getElementById('txtIdSexo').value=sexoIngresado;
}//FIN DE LA FUNCIÓN