function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if(!(edad >=13 && edad <= 18))
	{

		alert("no sos adolescente")
	}
	alert("ok");

}//FIN DE LA FUNCIÓN