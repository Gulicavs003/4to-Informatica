alert("Bienvenido a la aplicacion de calculo de mayor o menor. Presiona en aceptar para utilizarla");

factorial();

function factorial ( ){ 
    document.getElementById('enviar').addEventListener('click', () =>{
      
    let valor = document.getElementById("texto").value;
    let valor2 = document.getElementById("texto2").value;
    let valor3 = document.getElementById("texto3").value;
    validateForm();
    var max = Math.max(valor, valor2, valor3); 
    document.getElementById('resultado').innerHTML = max;
})
} 


function validateForm()
{

    var z =  document.getElementById('texto').value;
    var x =  document.getElementById('texto2').value;
    var y =  document.getElementById('texto3').value;
    if(/\D/.test(z, x, y))
        {
        alert("Caracter inválido. Solo se permiten números")
        }
}


