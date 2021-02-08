function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	let examen;
	examen = Math.round(Math.random()*10);

	if(examen > 8)
	{
		alert("Excelente");

	} else if(examen > 4 && examen < 9)
	{
		alert("Aprobo")

	}else
	{
		alert("Vamos que se puede")
	}



}//FIN DE LA FUNCIÓN