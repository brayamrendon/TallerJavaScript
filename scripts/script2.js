/*2- Realizar un algoritmo que calcule el porcentaje de descuento que va a tener un
cliente dependiendo de los siguientes datos:*/

let product=prompt("Ingrese el producto a comprar: carro, moto, bicicleta, patineta o scooter");

if (product==="carro" || product==="moto"){
    alert("Tienes un descuento del 15%");
}else if(product==="bicicleta" || product==="patineta"){
    alert("Tienes un descuento del 10%");
}else{
    alert("Tienes un descuento del 5%");
}