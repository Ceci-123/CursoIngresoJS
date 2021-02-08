function mostrar()
{
	//tomo la edad  
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil = document.getElementById('estadoCivil').value;

	console.log(estadoCivil);
	console.log(edad);

	if(edad < 18 && estadoCivil !="Soltero")
	{

		alert("Es muy pequeño para NO ser soltero");
	} 	


}//FIN DE LA FUNCIÓN