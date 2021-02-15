function mostrar()
{
     let precio;
     let porcentajeDeDescuento;
     let precioFinal;

     precio = prompt("decime el precio");
     porcentajeDeDescuento = prompt("decime cuanto le descuento");

     precioFinal = precio - precio * porcentajeDeDescuento/100;

     document.getElementById('elPrecioFinal').value = precioFinal;

}
