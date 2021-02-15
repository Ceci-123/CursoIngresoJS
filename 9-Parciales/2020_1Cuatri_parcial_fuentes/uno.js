
function mostrar()
{
	let producto;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let acumuladorDeJabon;
	let comparoAlcohol;
	let unidadesDelMasBarato;
	let fabricanteMasBarato;
	alert("uno");

	acumuladorDeJabon = 0;
	unidadesDelMasBarato = 0;
	fabricanteMasBarato = "";
	
	for (let i = 0; i < 5; i++) {
		producto = prompt("ingrese un producto");
		switch(producto)
		{
			case "barbijo": 	// "barbijo" , "jabón" o "alcohol"
			case "jabon":
			case "alcohol":
				producto = producto;
			break;
			default:
				producto = prompt("producto no valido, ingrese un producto b j o a");
			break;	

 
		} // final del switch producto
		precio = parseInt(prompt("ingrese el precio"));
		if(precio < 100 || precio > 300)
		{
			precio = parseInt(prompt("valor no valido, ingrese el precio entre 100/300"));
			// valido precio
		}
		unidades = parseInt(prompt("ingrese cantidad de unidades"));
		if(unidades < 1 || unidades > 1000)
		{
			unidades = parseInt(prompt("valor no valido ingrese cantidad de unidades entre 1 y 1000"));
			// valido unidades
		}
		marca = prompt("ingrese la marca");
		fabricante = prompt("ingrese fabricante");
        console.log(producto);  
		console.log(precio);
		console.log(unidades);
		console.log(marca);
		console.log(fabricante);

		switch(producto)
		{
			case "alcohol":   // si es alcohol elegir el mas barato, informar unidades y fabricante
			     if(precio < comparoAlcohol)
				 {
					 // este es mas barato
					 unidadesDelMasBarato = unidades;
					 fabricanteMasBarato = fabricante;
				 }
			   
			break;
			
			case "jabon": // si es jabon, sumar las unidades en un acumulador e informar ese acumulador
			   acumuladorDeJabon = acumuladorDeJabon + unidades;
			break;
		} // final del switch
		//+ hacer un if si las unidades que estoy ingresando son mayor a las unidmayores guardar el tipo
	} // final del for 5 vueltas

	alert("jabones" + acumuladorDeJabon);
	alert("alcohol" + unidadesDelMasBarato + fabricanteMasBarato);
	
}
