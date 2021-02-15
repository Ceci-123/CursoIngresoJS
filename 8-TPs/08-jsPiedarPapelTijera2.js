let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;
let mensajeEmpate;
let mensajeGanador;
let mensajePerdedor;

mensajeEmpate = "empatamos! yo elegi lo mismo que vos";
mensajeGanador = "ganaste! yo elegi ";
mensajePerdedor = "jaja perdiste! yo elegi ";

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random()* 3 + 1); 	
    console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	console.log("el humano eligio piedra");
	if(eleccionMaquina ==1)
    {
        alert(mensajeEmpate); 
		ContadorDeEmpates = ContadorDeEmpates + 1;     // empatamos

    } else if(eleccionMaquina ==2)
    {
        alert(mensajePerdedor + "papel");
		ContadorDePerdidas = ContadorDePerdidas + 1; // gano la compu
    }
    else 
    {
        alert(mensajeGanador + "tijera");
		ContadorDeGanadas = ContadorDeGanadas + 1;// gano el humano
    }

    mostrarResultado()
	comenzar()

}//FIN DE LA FUNCIÓN
function papel()
{
    console.log("el humano eligio papel");
	if(eleccionMaquina ==1)
    {
        alert(mensajePerdedor + "piedra");
		ContadorDePerdidas = ContadorDePerdidas + 1; // gano la compu
    } else if(eleccionMaquina ==2)
    {
        alert(mensajeEmpate);
		ContadorDeEmpates = ContadorDeEmpates + 1; // empatamos
    }
    else 
    {
        alert(mensajeGanador + "tijera");
		ContadorDeGanadas = ContadorDeGanadas + 1;// gano el humano
    }
	mostrarResultado()
	comenzar()
}//FIN DE LA FUNCIÓN
function tijera()
{
	console.log("el humano eligio tijera");
	if(eleccionMaquina ==1)
    {
        alert(mensajePerdedor + "piedra");
		ContadorDePerdidas = ContadorDePerdidas + 1; // gano la compu
    } else if(eleccionMaquina ==2)
    {
        alert(mensajeGanador + "papel");
		ContadorDeGanadas = ContadorDeGanadas + 1; // gana el humano
    }
    else 
    {
        alert(mensajeEmpate);
		ContadorDeEmpates = ContadorDeEmpates + 1; // empatamos
    }
	mostrarResultado()
	comenzar()
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('txtIdGanadas').value = ContadorDeGanadas + " ganadas";
	document.getElementById('txtIdPerdidas').value = ContadorDePerdidas + " perdidas";
	document.getElementById('txtIdEmpatadas').value = ContadorDeEmpates + " empates";
	
}