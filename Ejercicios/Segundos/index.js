segundos();

function segundos ( ){ 
document.getElementById('enviar').addEventListener('click', () =>{
    let tiempoEnSegundos = document.getElementById('tiempoEnSegundos').value;
    validateForm();
    segundosRestantes = 60 - tiempoEnSegundos % 60; 
    if(segundosRestantes === 60 )
    segundosRestantes = 0;
   
   
    document.getElementById('resultado').innerHTML = segundosRestantes;
})

}

function validateForm()
{

    var z =  document.getElementById('tiempoEnSegundos').value;
    if(/\D/.test(z))
        {
        alert("Caracter inválido. Solo se permiten números")
        }
}