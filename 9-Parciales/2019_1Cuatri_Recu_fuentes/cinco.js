function mostrar()
{
   let continente;
   let cantidadDeDias;
   let medioDePago;
   let precioPorDia;
   let tarifaFinal;
   let mensaje;
   let cheque;

   continente = document.getElementById('selecContinente').value;
   medioDePago = document.getElementById('selecPago').value;
   cantidadDeDias = parseInt(prompt("decime cuantos dias te vas"));
   cheque = prompt("decime si pagas con cheque s/n");
   precioPorDia = 100;
   tarifaFinal = precioPorDia * cantidadDeDias;
   mensaje = "Su viaje cuesta $ ";
   
   switch(continente)
   {
       case "America":
           tarifaFinal = tarifaFinal - tarifaFinal * 0.15;
           console.log("ame");
           switch(medioDePago)
           {
               case "Débito":
               tarifaFinal = tarifaFinal - tarifaFinal * 0.10; 
               console.log("ame deb");   
           }

       break;
       case "África":
       case "Oceania":
             tarifaFinal = tarifaFinal - tarifaFinal * 0.30;
             console.log("afric ocean");
             switch(medioDePago)
             {
                 case "MercadoPago":
                 case "Efectivo":
                 tarifaFinal = tarifaFinal - tarifaFinal * 0.15;  
                 console.log("afri ocean con merc pag o efvo");
                 break;      
             }

       break;
       case "Europa":
        tarifaFinal = tarifaFinal - tarifaFinal * 0.20;
        console.log("europa");
        switch(medioDePago)
        {
            case "Debito":
                tarifaFinal = tarifaFinal - tarifaFinal * 0.15;
                console.log("europa deb");    
            //15
            break;
            case "MercadoPago":
                tarifaFinal = tarifaFinal - tarifaFinal * 0.10;
                console.log("europa merc pago");
                // 10
            break; 
            default:
                tarifaFinal = tarifaFinal - tarifaFinal * 0.05;
                // 5
            break;           
        }
       break;  
       default:
        tarifaFinal = tarifaFinal + tarifaFinal * 0.20;
           // recargo del 20
       break;              
   }

   // si paga con cheque
   switch(cheque)
   {
       case "s":
            tarifaFinal = tarifaFinal + tarifaFinal * 0.15;
           // recarga 15
       break;
       case "n":
           tarifaFinal = tarifaFinal;
       break;        
   }

   alert(mensaje + tarifaFinal);
}
