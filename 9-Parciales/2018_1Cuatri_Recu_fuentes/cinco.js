function mostrar()
{
    let diaDeSemana;
    diaDeSemana = prompt("decime un dia");

    switch(diaDeSemana)
    {
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
            alert("a trabajar");
        break;  
        case "Sabado":
        case "Domingo":
            alert("buen finde");
        break;
        default:
            alert("no es un dia valido");
        break;  
    }


}
