function mostrar()
{
    let numeroUno;
    let numeroDos;
    let resultado;

    numeroUno = prompt("decime un numero");
    numeroDos = prompt("decime otro numero");
    
    
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno + numeroDos;

    if(numeroUno == numeroDos) // son iguales
    {
        alert(numeroUno + "y" + numeroDos);
        console.log("concatenados son iguales");  // mostrar concatenados
    }
    if(numeroUno > numeroDos) // el primero es mayor
    {
        alert(numeroUno / numeroDos);
        console.log("divido");// los divido
    } else
    {
        alert(resultado);
        console.log("sumo");//sumarlos
    }
    if(resultado < 50) // la suma es menor a 50
    {
        alert("La suma es " + resultado + "y es menos que 50");
        console.log("sumo menor a 50");// "la suma es xxx y es menor a 50".
    }


}
  