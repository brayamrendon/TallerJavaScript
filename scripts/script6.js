/*6- Desarrollar un algoritmo que permita ingresar las edades de 10 estudiantes.

El algoritmo deberá mostrar cuántos estudiantes son mayores de edad y son
menores de edad.*/
let acumMayores=0,
    acumMenores=0;
    
for (i=1; i<=4; i++){
    let age=Number(prompt("Ingresa la edad del estudiante "+i));
  if(age>17){
    acumMayores=acumMayores+1
  }else {
    acumMenores=acumMenores+1 
  }  
} 

alert("La cantidad de estudiantes mayores es de: "+acumMayores);
alert("La cantidad de estudiantes menores es de: "+acumMenores);
    