/*
Cecilia Calanna
TP 12

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
    let continuar;
	let sueldo;
	let legajo;
	let nacionalidad;
	edadIngresada = 0;
	legajo = 0;

	continuar = "si";
	while(continuar == "si")
	{
		edadIngresada = parseInt(prompt("Ingrese edad entre 18 y 90 años"));
		while(edadIngresada < 18 || edadIngresada > 90)
		{
			edadIngresada = parseInt(prompt("Error! Ingrese edad nuevamente"));
			// validar edad
		} // fin del while edad
		sexoIngresado = prompt("ingrese sexo M / F");
		while(sexoIngresado != "M" && sexoIngresado != "F")
		{
			sexoIngresado = prompt("Error! ingrese sexo M / F");
			// validar sexo
		} // fin del while sexo
		estadoCivilIngresado = parseInt(prompt("ingrese estado civil 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
		while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
		{
			estadoCivilIngresado = prompt("ingrese estado civil 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
			// valido estado civil
		} // fin del while de estado civil
		sueldo = parseInt(prompt("Ingrese sueldo"));
		while(sueldo < 8000)
		{
			sueldo = parseInt(prompt("Ingrese sueldo mayor a 8000"));
			// validar sueldo
		} // fin del while sueldo
		legajo = parseInt(prompt("Ingrese legajo"));
		
		while(legajo < 1000)
		{
			legajo = parseInt(prompt("Ingrese legajo numerico de 4 cifras"));
			// validar legajo  numérico de 4 cifras, sin ceros a la izquierda
		} // fin del while legajo
		nacionalidad = prompt("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
		while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
		{
			nacionalidad = prompt("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
			// valido nacionalidad
		} // fin del while de nacionalidad
		continuar = prompt("desea continuar cargando? si o no");

		// vuelco los datos en la pagina
		document.getElementById('txtIdEdad').value = edadIngresada;
		document.getElementById('txtIdSexo').value = sexoIngresado;
		document.getElementById('txtIdEstadoCivil').value = estadoCivilIngresado;
		document.getElementById('txtIdSueldo').value = sueldo;
		document.getElementById('txtIdLegajo').value = legajo;
		document.getElementById('txtIdNacionalidad').value = nacionalidad;
		

	} // fin del while de continuar cargando


}
