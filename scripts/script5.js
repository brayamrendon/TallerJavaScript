/*5- En cierta universidad se tiene N cantidad de estudiantes. Elabore un algoritmo
que encuentre el promedio de edades de los estudiantes mayores de 21 años y el
promedio de edades del resto de estudiantes. Por cada estudiante se tiene un
registro que contiene su código y edad.*/

let Student=Number(prompt("Ingrese la cantidad de estudiantes")),
     acumMayores=0,
     acumMenores=0,
     averageMayores=0,
     averageMenores=0;
    
for (i=1; i<=Student; i++){
    let age=Number(prompt("Ingrese la edad del estudiante "+i ));
  if (age>21){
    acumMayores=acumMayores+age 
    averageMayores=averageMayores+1
  }else if (age<=21){
    acumMenores=acumMenores+age     
    averageMenores=averageMenores+1
  }  
}

alert("El promedio de los estudiantes mayores a 21 años es de: "+acumMayores/averageMayores)
alert("El promedio de los estudiantes menores a 21 años es de: "+acumMenores/averageMenores)
