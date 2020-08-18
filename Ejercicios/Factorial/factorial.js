factorial();

function factorial ( ){ 
document.getElementById('enviar').addEventListener('click', () =>{
    let numeroCargado = document.getElementById('numeroCargado').value;
    validateForm();
    let r = 1;
    for(let i = numeroCargado; i>0; i--){
        r *= i;
    }
    document.getElementById('resultado').innerHTML = r;
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