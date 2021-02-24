/* 
Calanna Cecilia  24 de febrero
Debemos realizar la carga de 5(cinco) productos de prevención de contagio, <br>
de cada una debo obtener los siguientes datos: <br>
el tipo (validar "barbijo" , "jabón" o "alcohol") , <br>
el precio (validar entre 100 y 300),<br>
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
 la Marca y el fabricante. <br>
Se debe Informar al usuario lo siguiente:<br>

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
b) Del tipo con mas unidades, el promedio por compra <br>
c) Cuántas unidades de jabones hay en total
 */
function mostrar()
{
	var contadorDeVueltas;
	var tipoIngresado;
    var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var alcoholMasBarato;
	var alcoholBaratoCantidad;
	var alcoholBaratoFabricante;
	var contadorAlcoholes;
	var contadorDeJabones;
	var contadorBarbijos;
	var acumuladorCantidadAlcoholes;
	var acumuladorCantidadJabones;
	var acumuladorCantidadBarbijos;
	var tipoMasVendido;
	var promedioDelMasVendido;

	promedioDelMasVendido = 0;
	contadorAlcoholes =0;
	contadorDeJabones=0;
	contadorBarbijos=0;
	acumuladorCantidadAlcoholes=0;
	acumuladorCantidadJabones=0;
	acumuladorCantidadBarbijos=0;
	alcoholMasBarato = 0;
	contadorDeVueltas = 0;
	while(contadorDeVueltas < 5)
	{
		tipoIngresado = prompt("ingrese tipo");
		while(isNaN(tipoIngresado) == false || tipoIngresado != "barbijo" && tipoIngresado != "jabon" && tipoIngresado != "alcohol")
		{
			tipoIngresado =prompt("error, ingrese de nuevo el tipo");
		} // fin while validacion tipo

		precioIngresado = prompt("ingrese precio");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("error, ingrese precio");
			precioIngresado = parseInt(precioIngresado);
		}   // fin while precio

		cantidadIngresada = prompt("ingrese cantidad");
		cantidadIngresada = parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada) == true || cantidadIngresada < 0 || cantidadIngresada > 1000)
		{
			cantidadIngresada = prompt("error, ingrese cantidad");
			cantidadIngresada = parseInt(cantidadIngresada);
		}   // fin while cantidad

		marcaIngresada = prompt("ingrese marca");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("error, ingrese de nuevo marca");
		} // fin while validacion marca

		fabricanteIngresado = prompt("ingrese fabricante");
		while(isNaN(fabricanteIngresado) == false)
		{
			fabricanteIngresado =  prompt("error, ingrese de nuevo el fabricante");
		} // fin while validacion fabricante

		/* if(tipoIngresado == "alcohol" && precioIngresado < alcoholMasBarato || flagAlcohol == 0) 
		 // si ingreso alcohol y ademas el precio es mas barato o paso x primera vez
		{
			alcoholMasBarato = precioIngresado;
			alcoholBaratoCantidad = cantidadIngresada;
			alcoholBaratoFabricante = fabricanteIngresado;
			flagAlcohol = 1;
		
		}  // fin if alcohol */
       // b) Del tipo con mas unidades, el promedio por compra <br>
	   switch(tipoIngresado)
	   { 
		    case "alcohol":
				// paso el if
				if(precioIngresado < alcoholMasBarato || contadorAlcoholes == 0) 
		 		{
				alcoholMasBarato = precioIngresado;
				alcoholBaratoCantidad = cantidadIngresada;
				alcoholBaratoFabricante = fabricanteIngresado;
				}
				// final de lo del if
				contadorAlcoholes = contadorAlcoholes + 1;
				acumuladorCantidadAlcoholes = acumuladorCantidadAlcoholes + cantidadIngresada;
			break;
			case "barbijo":
				contadorBarbijos = contadorBarbijos + 1;
				acumuladorCantidadBarbijos = acumuladorCantidadBarbijos + cantidadIngresada;
			break;  
			case "jabon":
				contadorDeJabones = contadorDeJabones + 1;
				acumuladorCantidadJabones = acumuladorCantidadJabones + cantidadIngresada;
			break;	
			
			
	   } // fin del switch de tipo

	   		contadorDeVueltas ++;

	}  // fin  while del contador de vueltas

	// veo cual es el que mas vendi
	if(acumuladorCantidadAlcoholes > acumuladorCantidadBarbijos && acumuladorCantidadAlcoholes > acumuladorCantidadJabones)
	{
		tipoMasVendido = "alcohol";
		promedioDelMasVendido = acumuladorCantidadAlcoholes / contadorAlcoholes;
		// vendi mas alcoholes
	} else if(acumuladorCantidadBarbijos > acumuladorCantidadJabones)
	{
		tipoMasVendido = "barbijo";
		promedioDelMasVendido = acumuladorCantidadBarbijos / contadorBarbijos;
		// vendi mas barbijos
	} else 
	{
		tipoMasVendido = "jabon";
		promedioDelMasVendido = acumuladorCantidadJabones / contadorDeJabones;
		// vendi mas jabones 
	}

	alert("el alcohol mas barato es " + alcoholMasBarato + "su cantidad " + alcoholBaratoCantidad + "y su fabricante "+ alcoholBaratoFabricante)
	alert("el tipo mas vendido es" + tipoMasVendido + "y su promedio " + promedioDelMasVendido);
	alert("Unidades de jabon en total " + acumuladorCantidadJabones);
			
}
