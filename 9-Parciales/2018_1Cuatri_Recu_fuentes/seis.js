function mostrar()
{
    let hora;
    let mensaje;
    hora = parseInt(document.getElementById('laHora').value);
    console.log(hora);

    switch(hora)
    {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            mensaje = "es de mañana";
            // es de mañana
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            mensaje = "es de tarde";
            // es de tarde
        break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            mensaje = "es de noche";
            // es de noche
            if(hora > 19 && hora <=24) // entre 20 y 24
            {
                mensaje = "a dormir que es de noche";
                // a dormir
            }
        break;    
        default:
            mensaje = "hora invalida";    // hora no valida
        break;                
                
        
        
    } // fin del switch
    alert(mensaje);  
}
