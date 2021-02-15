/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;
let mensajeGanador;
let mensajeEmpate;
let mensajePerdedor;

mensajeEmpate = "empatamos, yo elegi lo mismo que vos";
mensajeGanador = "ganaste! yo elegi ";
mensajePerdedor = "jaja perdiste yo elegi ";


function comenzar()
{
	eleccionMaquina = Math.floor(Math.random()* 3 + 1); 	
    console.log(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	console.log("el humano eligio piedra");
    if(eleccionMaquina ==1)
    {
        alert(mensajeEmpate);      // empatamos

    } else if(eleccionMaquina ==2)
    {
        alert(mensajePerdedor + "papel"); // gano la compu
    }
    else 
    {
        alert(mensajeGanador + "tijera");// gano el humano
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    console.log("el humano eligio papel");
    if(eleccionMaquina ==1)
    {
        alert(mensajePerdedor + "piedra"); // gano la compu
    } else if(eleccionMaquina ==2)
    {
        alert(mensajeEmpate); // empatamos
    }
    else 
    {
        alert(mensajeGanador + "tijera");// gano el humano
    }
 
}//FIN DE LA FUNCIÓN
function tijera()
{
	console.log("el humano eligio tijera");
    if(eleccionMaquina ==1)
    {
        alert(mensajePerdedor + "piedra"); // gano la compu
    } else if(eleccionMaquina ==2)
    {
        alert(mensajeGanador + "papel"); // gana el humano
    }
    else 
    {
        alert(mensajeEmpate); // empatamos
    }


}//FIN DE LA FUNCIÓN