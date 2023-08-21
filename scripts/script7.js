/*7- Desarrollar un algoritmo que permita ingresar 5 productos de la canasta familiar;
nombre del producto y su precio, que al final me muestra cuanto es el subtotal
(precio sin IVA), cuánto es el IVA del 19% y cuál es el total que debe pagar una
persona.*/
let acumprice=0
    

for (i=1; i<=2; i++){
    let product=prompt("Ingresa el nombre del producto "+i);
    let price=Number(prompt("Ingresa el valor del producto "+i));
    acumprice=acumprice+price
    iva=(acumprice*.19)
    total=(acumprice+iva)    
 
}

alert("El subtotal es: $ "+acumprice+" El iva del 19% es: $ "+iva+" El total a pagar es: $ "+total);