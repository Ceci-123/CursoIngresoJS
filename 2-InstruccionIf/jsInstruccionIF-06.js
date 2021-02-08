function mostrar()
{
	//tomo la edad 
	let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);

	if(edad < 13)
	{
		alert("sos un niño")
	}
	else if(edad >13 && edad <= 18)
	{
		alert("sos adolescente")
	}
	else
	{
		alert("sos adulto")
	}

	alert("ok");



}//FIN DE LA FUNCIÓN