function mostrar()
{
    let planeta;
    let mensaje;
    planeta = prompt("decime un planeta");
    console.log(planeta);

    switch(planeta)
    {
        case "tierra":
            mensaje = "aca vivimos";
        break;
        case "mercurio":
        case "venus":
            mensaje = "hace mas calor";
        break;
        case "saturno":
        case "neptuno":
            mensaje = "hace mas frio";
        break;
        default:
            mensaje = "planeta no existente";
        break;                    
    }
    alert(mensaje);
}
