function mostrar()
{
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);

	if(edad >= 18)
	{
		alert("sos mayor")
	}
	else 
	{
		alert("sos menor");
	}
	
	alert("despues del if");

}//FIN DE LA FUNCIÓN