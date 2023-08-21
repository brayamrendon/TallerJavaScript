/*3- Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el mes al
que corresponde el valor ingresado y los signos del zodiaco. Ejemplo: si el valor
ingresado es 5, entonces imprimir “Mayo”, “Tauro - Géminis”.*/

let Month=Number(prompt("Ingrese el numero del mes"))

if (Month===1){
    alert("Enero: ♑Capricornio - ♒Acuario")
}else if(Month===2){
    alert("Febrero: ♒Acuario - ♓Piscis")
}else if(Month===3){
    alert("Marzo: ♓Piscis - ♈Aries")
}else if(Month===4){
    alert("Abril: ♈Aries - ♉Tauro")
}else if(Month===5){
    alert("Mayo: ♉Tauro - ♊Geminis")
}else if(Month===6){
    alert("Junio: ♊Geminis - 🕎Cancer")
}else if(Month===7){
    alert("Julio: 🕎Cancer - ♌Leo")
}else if(Month===8){
    alert("Agosto: ♌Leo - ♍Virgo")
}else if(Month===9){
    alert("Septiembre: ♍Virgo - ♎Libra")
}else if(Month===10){
    alert("Octubre: ♎Libra - ♏Escorpion")
}else if(Month===11){
    alert("Noviembre: ♏Escorpion - ♐Sagitario")
}else{
    alert("Diciembre: ♐Sagitario - ♑Capricornio")
}