millas();

function millas ( ){ 
document.getElementById('enviar').addEventListener('click', () =>{
    let millasMarinas = document.getElementById('millas').value;
    validateForm();
   
   
        let metros = millasMarinas * 1852 
   
    document.getElementById('resultado').innerHTML = metros + "M";
})

}

function validateForm()
{

    var z =  document.getElementById('millas').value;
    if(/\D/.test(z))
        {
        alert("Caracter inválido. Solo se permiten números")
        }
}