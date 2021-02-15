/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var usuarioDice;
var resultado;
function comenzar()
{
    let numeroUno;
    let numeroDos;
    let operacion;
    

    numeroUno = Math.floor(Math.random()* 10 + 1);
    numeroDos = Math.floor(Math.random()* 10 + 1);
    operacion = Math.floor(Math.random()* 4 + 1);
    
	document.getElementById('txtIdPrimerNumero').value = numeroUno;
    document.getElementById('txtIdSegundoNumero').value = numeroDos;
    
    switch(operacion)
    {
        case 1:
            document.getElementById('txtIdOperador').value = "+";
            resultado = numeroUno + numeroDos;
        break;
        case 2:
            document.getElementById('txtIdOperador').value = "-";
            resultado = numeroUno - numeroDos;
        break;
        case 3:
            document.getElementById('txtIdOperador').value = "*";
            resultado = numeroUno * numeroDos;
        break;
        case 4:
            document.getElementById('txtIdOperador').value = "/";
            resultado = numeroUno / numeroDos;
        break;

    } // fin del switch
        
    

}//FIN DE LA FUNCIÓN
function Responder()
{    
    usuarioDice = document.getElementById('txtIdRespuesta').value;
    usuarioDice = parseInt(usuarioDice);  
    if(usuarioDice == resultado)
    {
        respuesta = "sos un capo";
        // muy bien
    } else 
    {
        respuesta = "no sabes matematicas";
        // esta mal
    }  
    alert(respuesta);
    comenzar();
	

}//FIN DE LA FUNCIÓN
