function mostrar()
{
	//Maria Cecilia Calanna
	//trabajo 10 del IF version 2!!!!!
	

	let examen;
	let mensaje;
	examen = Math.floor(Math.random()*10) + 1;

	if(examen > 8)
	{
		mensaje = "Excelente! Tu nota es ";

	} else if(examen < 4)
	{
		mensaje = "Vamos que la proxima se puede! Te sacaste"

	}else
	{
		mensaje = "aprobaste!!! "
	}

    alert(mensaje + examen);

}//FIN DE LA FUNCIÓN