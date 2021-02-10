/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 
function CalcularPrecio () 
{
    let cantidadLamparas;
    let marca;
    let precioFinal;
    const PRECIO_LAMPARITA = 35;
    let descuento; 

    cantidadLamparas = parseInt(document.getElementById('txtIdCantidad').value);
    marca = document.getElementById('Marca').value;
    precioFinal = PRECIO_LAMPARITA * cantidadLamparas;
    

    console.log(cantidadLamparas);
    console.log(marca);
    descuento = 0;
    

    if(cantidadLamparas >6)  //compra 6 o mas lamp
    {
       descuento = 50; // descuento 50%
    } // fin del 6
    if (cantidadLamparas ==5)  // compra 5
    {
        if(marca = "ArgentinaLuz") // la marca es argentinaluz
        {
           descuento = 40; // descuento 40%
        } else 
        {
           descuento = 30; // descuento es 30%
        }
    } // fin si son 5 lamparitas
    if(cantidadLamparas ==4) // si compra 4
    {
        if(marca = "ArgentinaLuz") // marca "ArgentinaLuz" o “FelipeLamparas
        {
           descuento = 25;  // el descuento es 25%
        } else
        {
           descuento = 20; // descuento del 20 %
        }

    } // fin si compra 4
    if(cantidadLamparas ==3)  // si compra 3
    {
        if(marca = "ArgentinaLuz" ) // "ArgentinaLuz
        {
           descuento = 15; // descuento del 15

        }
        if(marca = "FelipeLamparas") // Felipe
        {
           descuento = 10; // descuento 10
        } else 
        {
           descuento = 5; // descuento 5
        }
    }
    console.log(descuento);
    precioFinal = precioFinal + precioFinal * descuento /100;
    document.getElementById('txtIdprecioDescuento').value = precioFinal;
    
}