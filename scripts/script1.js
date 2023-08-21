/*1- Realizar un programa en el que el usuario introduzca el número del mes (1 al 12)
y se muestra al final si ese mes es de 30 o 31 días.*/

let Month=Number(prompt("Ingrese el numero del mes"))

if (Month===2){
    alert("Este mes tiene 28 dias")
}else if (Month===4 || Month===6 || Month===9 ||Month===11 ){
    alert("Este mes tiene 30 dias")
}else{
    alert("Este mes tiene 31 dias")
}