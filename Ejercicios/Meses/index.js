var año1=prompt("Ingrese el primer año");
var año2=prompt("Ingrese el segundo año");
if(año1>año2){
    var meses=(año1-año2)*12;
}else{
    var meses=(año2-año1)*12;
}
alert("Los meses transcurridos entre el año "+año1+" y el año "+año2+" son "+ meses);
