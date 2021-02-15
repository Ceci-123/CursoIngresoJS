function mostrar()
{
    let numeroUno;
    let numeroDos;
    let resultado;
    let mensaje;

    numeroUno = parseInt(prompt("decime un numero"));
    numeroDos = parseInt(prompt("decime otro"));
    console.log(numeroUno + numeroDos);

    if(numeroUno == numeroDos) // son iguales
    {
        mensaje = "son iguales y el cuadrado es ";
        resultado = numeroUno * numeroDos;
        //mostrar el cuadrado del nro
    } else
    if(numeroUno % numeroDos == 0) //el primero divisible por el segundo
    {
        mensaje = "la resta es ";
        resultado = numeroUno - numeroDos;
        // restar los numeros
    }
    else 
    {
        mensaje = " el resto de la division es ";
        resultado = numeroUno % numeroDos;
        // mostrar el resto de la division
        if(numeroUno % numeroDos > 3) // el resto es mayor a 3
        {
           mensaje = "el resto es mayor a tres";
           resultado = numeroUno % numeroDos;
            // informar q es mayor el resto
        }
    }
    alert(mensaje + resultado); 
 }
