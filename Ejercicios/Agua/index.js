/* var litro=prompt("Ingrese la capacidad de litros de la manguera por minuto");
var minutos=50000/litro;
var hora=minutos/60;
var horaTotal = Math.round(hora)

alert("Tarda "+horaTotal+ " hs en llenarse") */


factorial();

function factorial ( ){ 
document.getElementById('enviar').addEventListener('click', () =>{
    let tanque = document.getElementById('tanque').value;
    let manguera = document.getElementById('manguera').value;
    validateForm();
    var minutos=tanque/manguera;
    var hora=minutos/60;
    var horaTotal = Math.round(hora)

    document.getElementById('resultado').innerHTML = horaTotal;
})

}

function validateForm()
{
    var x = document.getElementById('manguera').value;
    var z =  document.getElementById('tanque').value;
    if(/\D/.test(z, x))
        {
        alert("Caracter inválido. Solo se permiten números")
        }
}


