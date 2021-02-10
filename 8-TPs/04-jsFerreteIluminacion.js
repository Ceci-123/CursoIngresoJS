/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 // Cecilia Calanna Iluminacion A y B version 2
function CalcularPrecio () 
{
 	let cantidadLamparas;
    const PRECIO_LAMPARA = 35;
    let mostrarPrecio;
    let marca;
    let descuentoLuz;
    let descuentoOtras;
    let descuentoCantidad;
    let DESCUENTO_LUZ_FELIPE = 0.25;
    let descuentoCuatroLamparas;


    descuentoCuatroLamparas = 0.20;
    descuentoLuz = 0.4;
    descuentoOtras = 0.3;
    descuentoCantidad = 0.5;


     cantidadLamparas = parseFloat(document.getElementById('txtIdCantidad').value);
     mostrarPrecio = cantidadLamparas * PRECIO_LAMPARA;
     marca = document.getElementById('Marca').value;
     console.log(marca);
     console.log(cantidadLamparas);

     if(cantidadLamparas > 5)
     {
         mostrarPrecio = mostrarPrecio * descuentoCantidad;
     } 
     else 
     {
         if(cantidadLamparas == 5)
         {
            if(marca == "ArgentinaLuz")
            {
                mostrarPrecio = mostrarPrecio * descuentoLuz;
            }
            else
            {
                mostrarPrecio = mostrarPrecio * descuentoOtras;

            }
         }
         else
         {
             if(cantidadLamparas == 4)
             {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    mostrarPrecio = mostrarPrecio * DESCUENTO_LUZ_FELIPE;
                }
                else
                {
                    mostrarPrecio = mostrarPrecio * descuentoCuatroLamparas;
                }
             } // fin == 4

         } // fin == 5
               
     }   // fin > 5  

     document.getElementById('txtIdprecioDescuento').value = mostrarPrecio;

       
}
