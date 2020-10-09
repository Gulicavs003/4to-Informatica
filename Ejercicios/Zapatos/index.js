
var psan=150
var pzap=250
var pmoc=670



factorial();

function factorial ( ){ 
    document.getElementById('enviar').addEventListener('click', () =>{
        var nombre = document.getElementById('nombre').value;
        var cansan = document.getElementById('cansan').value;
        var canzap = document.getElementById('canzap').value;
        var canmoc = document.getElementById('canmoc').value;
        var costoTotal=Math.round((psan*cansan)+(pzap*canzap)+(pmoc*canmoc))
        var ganancia=Math.round((costoTotal*55)/100)
        var vdescuento=Math.round((costoTotal*8)/100)
        var condes=Math.round(costoTotal-vdescuento);
        var iva= Math.round((condes*21)/100);
        var final= Math.round(iva+condes); 
        
        cuentas();
        
        function cuentas (){
            document.write("Pedido a nombre de:"+nombre + "<br>")
            document.write("El costo total es: $"+costoTotal + "<br>")
            document.write("La ganancia es de: $"+ganancia + "<br>")
            document.write("El valor del descuento es de: $"+vdescuento + "<br>")
            document.write("El costo con el descuento es de: $"+condes + "<br>")
            document.write("El valor del IVA es de: $"+iva+ "<br>")
            document.write("El valor final es de: $"+final+ "<br>") 
        } 
    
    })
    
    }


    
    





