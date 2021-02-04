/*

Cecilia Calanna E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;
	const DESCUENTO = 0.25;

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);

	resultado = (importe * DESCUENTO);
	resultado = importe - resultado;


	document.getElementById('txtIdResultado').value = resultado;
	
	
}
