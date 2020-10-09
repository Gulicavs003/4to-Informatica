descuento();

function descuento (){ 
document.getElementById('enviar').addEventListener('click', () =>{
    let m = document.getElementById('numero').value;
    validateForm();
   
    if(m>= 100){
        m =+ m -(m*0.1)
    } else {
        m =+ m - (m*0.02)
    }
   
    document.getElementById('resultado').innerHTML = "$" + m;
})

}

function validateForm()
{

    var z =  document.getElementById('numero').value;
    if(/\D/.test(z))
        {
        alert("Caracter inválido. Solo se permiten números")
        }
}

