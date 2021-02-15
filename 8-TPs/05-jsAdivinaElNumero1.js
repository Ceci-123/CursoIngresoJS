/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos;
let usuarioDice;
let diferencia;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.floor( Math.random()* 100) ;
  contadorIntentos = 0; 

	console.log(numeroSecreto);

}

function verificar()
{
  usuarioDice = parseInt(document.getElementById('txtIdNumero').value);
  if(usuarioDice == numeroSecreto)
  {
    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
    // acerto  
  }
  if(usuarioDice < numeroSecreto) 
  {
      diferencia = numeroSecreto - usuarioDice;
      contadorIntentos = contadorIntentos + 1;
      alert("te falta" + diferencia + " para el numero secreto");
    // falta 
  }
  if(usuarioDice > numeroSecreto)
  {
     diferencia = usuarioDice - numeroSecreto;
     contadorIntentos = contadorIntentos + 1;
     alert("te pasaste" + diferencia + " del numero");
    // se paso 
  }
   
   document.getElementById('txtIdIntentos').value = contadorIntentos;
  
	
	
}