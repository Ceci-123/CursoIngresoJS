
function mostrar()
{
	alert("uno domingo");
// variables
let i;
let tipoProducto;
let precioProducto;
let cantidadUnidadesProducto;
let marca;
let fabricante;
let acumuladorBarbijos;
let flagJabon;
let precioJabonMasCaro;
let cantidadUnidadesJabonMasCaro;
let fabricanteJabonMasCaro;
let acumuladorJabon;
let acumuladorAlcohol;
let tipoMasVendido;
let promedio;
let contadorAlcohol;
let contadorBarbijos;
let contadorJabones;

// inicializar
acumuladorBarbijos = 0;
flagJabon = true;
precioJabonMasCaro = 0;
cantidadUnidadesJabonMasCaro = 0;
fabricanteJabonMasCaro = 0;
acumuladorJabon = 0;
acumuladorAlcohol = 0;
tipoMasVendido = "";
promedio = "no se calcula";
contadorAlcohol = 0;
contadorBarbijos = 0;
contadorJabones = 0;

// for de carga
for(i = 0; i < 5; i ++)
{
	tipoProducto = prompt("ingrese barbijo jabon o alcohol");
	while(isNaN(tipoProducto)== false ||tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") 
	{
		tipoProducto = prompt("ingrese barbijo jabon o alcohol");
	}
	precioProducto = parseFloat(prompt("ingrese precio"));
	while(isNaN(precioProducto)== true || precioProducto < 100 || precioProducto > 300 )
	{
		precioProducto = parseFloat(prompt("ingrese precio"));
	}
	cantidadUnidadesProducto = parseInt(    prompt("cantidad de producto"));
	while(isNaN(cantidadUnidadesProducto)== true || cantidadUnidadesProducto < 0 || cantidadUnidadesProducto > 1000)
	{
		cantidadUnidadesProducto = prompt("cantidad de producto");
	}

	marca = prompt("ingrese marca");
	fabricante = prompt("ingrese fabricante");

	switch(tipoProducto)
	{
		case "alcohol":
			acumuladorAlcohol = acumuladorAlcohol + cantidadUnidadesProducto;
		break;
		case "barbijo":
			acumuladorBarbijos = acumuladorBarbijos + cantidadUnidadesProducto;
		break;
		case "jabon":
			if(flagJabon == true || precioProducto > precioJabonMasCaro)
			{
				flagJabon = false;
				precioJabonMasCaro = precioProducto;
				fabricanteJabonMasCaro = fabricante;
				cantidadUnidadesJabonMasCaro = cantidadUnidadesProducto;
			}
			acumuladorJabon = acumuladorJabon + cantidadUnidadesProducto;
		break;		
	}  // fin switch de tipo

	// comparacion mas vendido
	if(acumuladorAlcohol > acumuladorBarbijos && acumuladorAlcohol > acumuladorJabon)
	{
		tipoMasVendido = "alcohol";
		if(contadorAlcohol != 0)
		{
			promedio = acumuladorAlcohol / contadorAlcohol;
		}
	} else if(acumuladorJabon > acumuladorBarbijos)
	{
		tipoMasVendido = "jabon";
		if(contadorJabones != 0)
		{
			promedio = acumuladorJabon / contadorJabones;
		}
	} else
	{
		tipoMasVendido = "barbijo";
		if(contadorBarbijos != 0)
		{
			promedio = acumuladorBarbijos / contadorBarbijos;
		}
	}

}  // fin del for de carga

// informar
console.log("Del más caro de los jabones, la cantidad de unidades y el fabricante"+ cantidadUnidadesJabonMasCaro + fabricanteJabonMasCaro); 
console.log("Del tipo de producto con más unidades en total de la compra, el promedio por compra" + tipoMasVendido + promedio); 
console.log("Cuántas unidades de Barbijos se compraron en total" + acumuladorBarbijos);

}
