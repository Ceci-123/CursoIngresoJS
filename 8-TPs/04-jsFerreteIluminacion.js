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

    // switch de cantidad con if de marca
    // Cecilia Calanna

   let cantidadDeLamparas;
   let precioLampara;
   let precioFinal;
   let marcaLampara;
   let descuento;

   precioLampara = 35;
   cantidadDeLamparas = parseInt(document.getElementById('txtIdCantidad').value);
   marcaLampara = document.getElementById('Marca').value;
   precioFinal = cantidadDeLamparas * precioLampara;

   switch(cantidadDeLamparas)
   {
      case 6:
         descuento = 50; // descuento del 50
      break;
      case 5:
         if(marcaLampara == "ArgentinaLuz")
         {
            descuento = 40;//   descuento del 40 %
         }
         else 
         {
            descuento = 30;//   descuento es del 30%.

         }
      break;
      case 4:
         if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas") // marca "ArgentinaLuz" o “FelipeLamparas”
         {
            descuento = 25;// descuento del 25 % 
         }
         else 
         {
            descuento = 20;   //    y otra marca el descuento es del 20%.
         }
         
      break;
      case 3:
         if(marcaLampara == "ArgentinaLuz")  // marca "ArgentinaLuz"
         {
            descuento = 15;   // el descuento es del 15%
         }
         else if(marcaLampara == "FelipeLamparas") // si es “FelipeLamparas”
         {
            descuento = 10;   // se hace un descuento del 10 %
         }
         else 
         {
            descuento = 5; //  y si es de otra marca un 5%.

         }
      break;
      case 2:
      case 1:
         descuento = 0;
      break;
      default:
         descuento = 50;// descuento del 50
      break;   

   } // fin del switch de cantidad
   precioFinal = precioFinal * descuento - precioFinal;
   document.getElementById('txtIdprecioDescuento').value = precioFinal;
   console.log(precioFinal);




  /*  let cantidadDeLamparas;
   let marca;
   let precioFinal;
   const PRECIO_LAMPARITA = 35;

   cantidadDeLamparas = parseInt(document.getElementById('txtIdCantidad').value);
   marca = document.getElementById('Marca').value;
   precioFinal = cantidadDeLamparas * PRECIO_LAMPARITA;
   console.log(cantidadDeLamparas);
   console.log(marca);

   switch(cantidadDeLamparas) 
   {
      case 6: // si compra 6 
        precioFinal = precioFinal * 0.5 + precioFinal;    // descuento del 50
        console.log("compra 6 lamparitas");        
      break;  
      case 5: // si compra 5
          switch(marca)
          {
             case "ArgentinaLuz":
               precioFinal = precioFinal * 0.4 + precioFinal;  
               console.log("compra 5 lamparitas ArgLuz"); 
             break;
             default:
               precioFinal = precioFinal * 0.3 + precioFinal;  
               console.log("compra 5 lamparitas otra marca"); 
             break;   
          }
      break;
      case 4: // si compra 4
          switch(marca)
          {
             case "ArgentinaLuz":
             case "FelipeLamparas":
               precioFinal = precioFinal * 0.25 + precioFinal;  
               console.log("compra 4 lamparitas argen o felipe"); 
             break;
             default:
               precioFinal = precioFinal * 0.20 + precioFinal;  
               console.log("compra 4 lamparitas de otra marca");
             break;  

          }

      break;
      case 3:  // si compra 3
         switch(marca)
         {
            case "ArgentinaLuz":
              
               precioFinal = precioFinal * 0.15 + precioFinal;  
               console.log("compra 3 lamparitas argen");
             break;  
             case "FelipeLamparas": 
             
               precioFinal = precioFinal * 0.10 + precioFinal;  
               console.log("compra 4 lamparitas argen");
             break;  
             default:
               precioFinal = precioFinal * 0.05 + precioFinal;  
               console.log("compra 3 lamparitas de otra marca");
             break;  
         }
      break; 
      default: 
         precioFinal = precioFinal;
      break;      

   }

   document.getElementById('txtIdprecioDescuento').value = precioFinal;
 */
  
  // usando if y swich ******************************************************
  
  /* 
  
   // Cecilia Calanna if con switch

   let cantidadDeLamparas;
   let marca;
   let precioFinal;
   const PRECIO_LAMPARITA = 35;
   let descuento;

   cantidadDeLamparas = parseInt(document.getElementById('txtIdCantidad').value);
   marca = document.getElementById('Marca').value;
   descuento = 0;
   precioFinal = cantidadDeLamparas * PRECIO_LAMPARITA;
   document.getElementById('txtIdprecioDescuento').value = precioFinal;

   if(cantidadDeLamparas == 6) // si compra 6 o mas
   {
      // descuento 50 %
      descuento = 0.50;
   }  // fin if de 6 lamparitas
   
   if(cantidadDeLamparas == 5) // si compra 5
   {
      switch(marca)
      {
         case "ArgentinaLuz":  // descuento 40 %
            descuento = 0.40;
           
         break;
         default:  // descuento 30 %
            descuento = 0.30;
            
         break;   
      }

   } // fin if de 5 lamparitas

   if(cantidadDeLamparas == 4) // si compra 4
   {
      switch(marca)
      {
         case "ArgentinaLuz":
         case "FelipeLamparas":
            descuento = 0.25;
           
         break;
         default:
             descuento = 0.20;
            
         break;
      }

   } // fin if de 4 lamparitas

   if(cantidadDeLamparas == 3) // si compra 3
   {
      switch(marca)
      {
         case "ArgentinaLuz":
            descuento = 0.15;
           
         break;
         case "FelipeLamparas":
            descuento = 0.10;
           
         break;
         default:
            descuento = 0.05;
           
         break;
      }

   } // fin if de 3 lamparitas

   precioFinal = precioFinal + precioFinal *descuento;

   if(precioFinal > 120) // si se debe agregar IIBB
   {
     precioFinal = precioFinal + precioFinal * 0.10;
     document.getElementById('txtIdprecioDescuento').value = "usted esta pagando IIBB" + precioFinal;
   } // fin if de IIBB
   */ 
  
   
   // ****************************************** desde aca esta hecho con IF
   
    /* let cantidadLamparas;
    let marca;
    let precioFinal;
    const PRECIO_LAMPARITA = 35;
    let descuento; 
    let ingresosBrutos;

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
        if(marca == "ArgentinaLuz") // la marca es argentinaluz
        {
           descuento = 40; // descuento 40%
        }
        else
        {
           descuento = 30;
            // descuento es 30%
        }
    } // fin si son 5 lamparitas
    if(cantidadLamparas ==4) // si compra 4
    {
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas") // marca "ArgentinaLuz" o “FelipeLamparas
        {
           descuento = 25;  // el descuento es 25%
        } else
        {
           descuento = 20; // descuento del 20 %
        }

    } // fin si compra 4
    if(cantidadLamparas ==3)  // si compra 3
    {
        if(marca == "ArgentinaLuz") // "ArgentinaLuz
        {
           descuento = 15; // descuento del 15

        }
        if(marca == "FelipeLamparas") // Felipe
        {
           descuento = 10; // descuento 10
        } else 
        {
           descuento = 5; // descuento 5
        }
    }
    console.log(descuento);
    precioFinal = precioFinal - ( descuento /100);

    document.getElementById('txtIdprecioDescuento').value = precioFinal + "$";

    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 10/100;
        precioFinal = precioFinal + ingresosBrutos;

        document.getElementById('txtIdprecioDescuento').value = precioFinal + "$  IIBB usted pago $ " + ingresosBrutos;
        
    }
     */
}