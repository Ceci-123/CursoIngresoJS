/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

var cantidadPares;
var numeroIngresado;
function ComenzarIngreso () 
{
        // 
    
}
function NumerosPares()
{
    numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);

    if(numeroIngresado % 2 == 0) // es par
    {
        cantidadPares = numeroIngresado / 2;
    } else 
    {
        // es impar
        cantidadPares = (numeroIngresado - 1) / 2;
    }
    alert(cantidadPares);  

}
function NumerosImpares()
{
    numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
    if(numeroIngresado % 2 == 0) // es par
    {
        cantidadPares = (numeroIngresado - 1) / 2;
    } else 
    {
        // es impar
        cantidadPares = Math.floor(numeroIngresado / 2);
    }
    alert(cantidadPares);

}
function NumerosDivisibles()
{
    let contador = 0;
    numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
    for(i=0; i < 100; i++)
    {
        if(numeroIngresado % i == 0) // el numero es divisible x i
        {
            contador = contador + 1;
            // sumo 1 al contador
        } 

    } // fin del bucle for
    alert(contador);

}
