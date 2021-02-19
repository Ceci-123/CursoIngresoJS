
function mostrar()
{
	let producto;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let acumuladorDeJabon = 0;
	let comparoAlcohol = 0;
	let unidadesDelMasBarato = 0;
	let fabricanteMasBarato = "";
	let flag = 0;
	let acumuladorDeAlcohol = 0;
	let acumuladorDeBarbijo = 0;
	let contadorDeAlcoholes = 0;
	let contadorDeBarbijos = 0;
	let contadorDeJabon = 0;
	let tipoConMasUnidades;
	let promedio;
	alert("uno");

		
	for (let i = 0; i < 5; i++) {
		producto = prompt("ingrese un producto barbijo, jabon o alcohol");
		while(producto !="alcohol" && producto != "barbijo" && producto != "jabon")
		{
			producto = prompt("ingrese un producto barbijo, jabon o alcohol");
		}

		precio = parseFloat(prompt("ingrese el precio entre 100/300"));
		while(precio < 100 || precio > 300)
		{
			precio = parseFloat(prompt("valor no valido, ingrese el precio entre 100/300"));
			// valido precio
		}
		unidades = parseInt(prompt("ingrese cantidad de unidades"));
		while(unidades < 1 || unidades > 1000)
		{
			unidades = parseInt(prompt("valor no valido ingrese cantidad de unidades entre 1 y 1000"));
			// valido unidades
		}
		marca = prompt("ingrese la marca");
		fabricante = prompt("ingrese fabricante");
        
		switch(producto)   
		{
			case "alcohol":   // si es alcohol elegir el mas barato, informar unidades y fabricante

			     if(flag == 0 || comparoAlcohol > precio) // es la primera vez que paso o hay alc + barato
				 {
					 comparoAlcohol = precio;
					 flag = 1;
					 fabricanteMasBarato = fabricante;
					 unidadesDelMasBarato = unidades;
				 } 
			acumuladorDeAlcohol = acumuladorDeAlcohol + unidades;
			contadorDeAlcoholes = contadorDeAlcoholes + 1;
			   
			break;
			case "barbijo":
				acumuladorDeBarbijo = acumuladorDeBarbijo + unidades;
				contadorDeBarbijos = contadorDeBarbijos + 1;
			break;
			
			case "jabon": // si es jabon, sumar las unidades en un acumulador e informar ese acumulador
			   acumuladorDeJabon = acumuladorDeJabon + unidades;
			   contadorDeJabon = contadorDeJabon + 1;
			break;
		} // final del switch
		
	} // final del for 5 vueltas

	// respuesta b
	if(acumuladorDeAlcohol > acumuladorDeBarbijo && acumuladorDeAlcohol > acumuladorDeJabon) // se vendieron mas alcoholes
	{
        tipoConMasUnidades = "alcohol";
		promedio = acumuladorDeAlcohol / contadorDeAlcoholes;
	} else if(acumuladorDeBarbijo > acumuladorDeAlcohol && acumuladorDeBarbijo > acumuladorDeJabon) // se vendieron mas barbijos
	{
		tipoConMasUnidades = "barbijo";
		promedio = acumuladorDeBarbijo / contadorDeBarbijos;
	}else // se vendieron mas jabones
	{
		tipoConMasUnidades = "jabon";
		promedio = acumuladorDeJabon / contadorDeJabon;
	}


	alert("C jabones en total" + acumuladorDeJabon);
	alert("A alcohol mas barato se vendieron" + unidadesDelMasBarato + "fabricante" + fabricanteMasBarato);
	alert("B tipo con mas unidades es" + tipoConMasUnidades + "y su promedio" + promedio);
	
	
}
