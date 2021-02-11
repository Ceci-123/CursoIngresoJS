function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById('txtIdMes').value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
			alert("falta para invierno");
		break;
		case "Julio":
		case "Agosto":
			alert("invierno");
		break;
		case "Diciembre":
			alert("ahora calor");
		break;


	}



}//FIN DE LA FUNCIÓN