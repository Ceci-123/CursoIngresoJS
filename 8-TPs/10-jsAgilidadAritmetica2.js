/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var resultado;
function comenzar()
{
    let numeroUno;
    let numeroDos;
    let operacion;
    let signo;

    numeroUno = Math.floor(Math.random()* 10);
    numeroDos = Math.floor(Math.random()* 10);
    operacion = Math.floor(Math.random()* 3);

    document.getElementById('txtIdPrimerNumero').value = numeroUno;
    document.getElementById('txtIDSegundoNumero').value = numeroDos;

    switch(operacion)
    {
        case 0:
            signo = "+";
            resultado = numeroUno + numeroDos;
        break;
        case 1:
            signo = "-"
            resultado = numeroUno - numeroDos;
        break;
        case 2:
            signo = "*"
            resultado = numeroUno * numeroDos;
        break;
        case 3:
            signo = "/"
            resultado = numeroUno / numeroDos;
        break;

    } // fin del switch de operacion
    
    document.getElementById('txtIdOperador').value = signo;
    respuesta = parseInt(document.getElementById('txtIdRespuesta').value);
    // console.log(resultado);
 setTimeout(Responder(),4000);

 
    	
}//FIN DE LA FUNCIÓN

function Responder()
{
    respuesta = parseInt(document.getElementById('txtIdRespuesta').value);
    // console.log(respuesta);
    if(resultado == respuesta)
    {
        alert("ganaste"); // ganaste
    } else 
    {
       alert("perdiste"); // perdiste
    }
	


}//FIN DE LA FUNCIÓN
