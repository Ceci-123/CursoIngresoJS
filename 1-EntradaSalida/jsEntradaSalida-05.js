/*
Cecilia Calanna
ejercicio 5 bis
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	let apellido;

	nombre = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;
	apellido = prompt("decime tu apellido");
	
	alert( apellido + " usted se llama " + nombre + " y tiene " + edad + " años");
}

