/*4- Una distribuidora de huevos quiere contratarlo para que realice un algoritmo que
calcule el precio de venta para una cantidad de huevos a llevar por un determinado
cliente. Guiándose por la siguiente información:*/

let quantity=parseFloat(prompt("Ingrese la cantidad de huevos")),
    Price=250,
    total=0;

if (quantity>0 && quantity<=100){
    Price=Price*quantity
    total=(Price-(Price*.03))
}else if (quantity>100 && quantity<=200){
    Price=Price*quantity
    total=(Price-(Price*.05))
}else if (quantity>200 && quantity<=300){
    Price=Price*quantity
    total=(Price-(Price*.08))
}else if(quantity>300){
    Price=Price*quantity
    total=(Price-(Price*.10));
}

alert("El total de los Huevos es de: $ "+total)

    
