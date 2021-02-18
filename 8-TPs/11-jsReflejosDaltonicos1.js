/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
var random;

function comenzar()
{
    document.getElementById("txtIdColorElegido").value = "Mira el color";
    random = Math.floor(Math.random()*5);
    switch(random)
    {
        case 0:
            ColorSecreto = "blue";
            break;
        case 1:
            ColorSecreto = "yellow";
            break;
        case 2:
            ColorSecreto = "brown";
            break;
        case 3:
            ColorSecreto = "green";
            break;
        case 4:
            ColorSecreto = "skyblue";
            break;
        case 5:
            ColorSecreto = "red";
            break;
    }
    document.getElementById("txtIdColorElegido").style.backgroundColor = ColorSecreto;
	

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	
	


}//FIN DE LA FUNCIÓN
