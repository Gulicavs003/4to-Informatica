

factorial();

function factorial ( ){ 
document.getElementById('enviar').addEventListener('click', () =>{
    let numeroCargado = document.getElementById('numeroCargado').value;
    validateForm(); 
    
    if(numeroCargado < 200000){

        let r =  numeroCargado *1.15
        let j = Math.round(r)
        document.getElementById('resultado').innerHTML = " $" + j;    

    } else if (numeroCargado >= 200000){ 
        let r =  numeroCargado *1.12
        let j = Math.round(r)
        document.getElementById('resultado').innerHTML = " $" +  j;  

     }
    })
}



function validateForm()
{

    var z =  document.getElementById('numeroCargado').value;
    if(/\D/.test(z))
        {
            alert("Caracter inválido. Solo se permiten números")
        }
}
