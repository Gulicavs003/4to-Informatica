/* 
    document.getElementById('enviar').addEventListener('click', () =>{
        
    let horasTrabajadas = document.getElementById('tiempoEnSegundos').value; */




calcular();

function calcular() {
    
    var n = window.prompt("Ingrese la cantidad de sueldos a calcular")
    if (/\D/.test(n, h, t)) {
        alert("Caracter inválido. Solo se permiten números")
    }
    var total = 0;
    var e = 0;
    for (let i = 1; i <= n; i++) {
        var h = window.prompt("Ingrese las horas trabajadas mensualmente")
        var t = window.prompt("Ingrese el valor por hora")
        if (/\D/.test(n, h, t)) {
            alert("Caracter inválido. Solo se permiten números")
        }

        if (h > 40) {
            h = + h + (h * 0.5)
            h = +  h * t
            e++

        } else {
            h = +  h * t
        }
        console.log("El sueldo es" + h)
        total = total + h;

    }
    alert("El gasto total de la empresa es $ "  + total);

    if (e > 1 || e === 1)
        alert("La empresa paga a " + e + " empleados las horas extras")
    else if (e = 1 ) {
        alert("La empresa no tendrá que abonar horas extras")
    }


}

