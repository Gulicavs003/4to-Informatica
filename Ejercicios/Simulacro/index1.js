var base = window.prompt("Ingrese la base del triangulo")
var altura = window.prompt("Ingrese la altura del triangulo")

area = base*altura
hipotenusa = Math.sqrt(Math.pow(base, 2)+ Math.pow(altura, 2))

perimetro = base + altura + hipotenusa
var perimetroredondo = Math.round(perimetro)
alert("El perimetro es " + perimetro)