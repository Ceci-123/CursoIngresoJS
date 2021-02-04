/*
Cecilia Calanna
TP Ferrete Pinturas


3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let resultado;
    
    temperatura = document.getElementById('txtIdTemperatura').value;
    temperatura = parseFloat(temperatura);

    resultado = (temperatura - 32) * 5/9;

    alert(temperatura + " grados Fahrenheit equivalen a " + resultado + " grados Celsius");


}

function CentigradosFahrenheit () 
{
    let temperatura;
    let resultado;
    
    temperatura = document.getElementById('txtIdTemperatura').value;
    temperatura = parseFloat(temperatura);

    resultado = (temperatura * 9/5) + 32;

    alert(temperatura + " grados Celsius equivalen a " + resultado + " grados Fahrenheit");
}
