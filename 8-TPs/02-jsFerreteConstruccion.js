/*
Cecilia Calanna
Ferrete Construccion

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
      let largo;
      let ancho;
      let perimetro;
      let cantidad;
      const VUELTAS = 3;

      largo = document.getElementById('txtIdLargo').value;
      ancho = document.getElementById('txtIdAncho').value;

      largo = parseFloat(largo);
      ancho = parseFloat(ancho);

      perimetro = (largo + ancho) * 2;
      cantidad = perimetro * VUELTAS;

      alert("Tenes que comprar " + cantidad + " metros de alambre");

    
}
function Circulo () 
{
    const PI = 3.1416;
    let radio;
    const VUELTAS = 3;
    let perimetro;
    let cantidad;

    radio = document.getElementById('txtIdRadio').value;
    radio = parseFloat(radio);
    
    perimetro = 2 * PI * radio;
    console.log(perimetro);
    cantidad = perimetro * VUELTAS;
    cantidad = cantidad.toFixed(2);

    alert("Tenes que comprar " + cantidad + " metros de alambre");

}
function Materiales () 
{
    let ancho;
    let largo;
    let metrosCuadrados;
    const CAL = 3;
    const CEMENTO = 2;
    let bolsasCal;
    let bolsasCemento;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    metrosCuadrados = largo * ancho;
    console.log(metrosCuadrados);

    bolsasCal = metrosCuadrados * CAL;
    bolsasCemento = metrosCuadrados * CEMENTO;

    bolsasCal = bolsasCal.toFixed(2);
    bolsasCemento = bolsasCemento.toFixed(2);

    alert("Tenes que comprar " + bolsasCal + " bolsas de cal y "  + bolsasCemento + " bolsas de cemento para un contrapiso de esas medidas.");


}