/*8- Se desea elaborar un algoritmo que determine cuántas personas de un grupo
tienen hijos y cuántos no tienen, además se desea conocer el promedio del número
de hijos.*/

let quantitygroup=Number(prompt("Cuantas personas hay en el grupo"));
        
let cantidadWhile = 0;
let tienenHijos = 0;
let noTieneHijos = 0;
let acumTieneHijos = 0;

while (cantidadWhile < quantitygroup) {
    cantidadWhile++

    let tieneHijosRspuesta = prompt("Usted tiene hijos?")
    
    if(tieneHijosRspuesta =="si"){
        tienenHijos = tienenHijos+1
        let cuantosHijosTiene = Number(prompt("Cuantos hijos tienes?"));      
        acumTieneHijos = acumTieneHijos + cuantosHijosTiene

    }else if(tieneHijosRspuesta == "no"){
        noTieneHijos = noTieneHijos+1
    }
    
}
let promedioHijos = acumTieneHijos/tienenHijos 

alert(tienenHijos+" Tienen hijos - "+noTieneHijos+ ": No tienen hijos. Y el promedio de hijos es de: "+promedioHijos)