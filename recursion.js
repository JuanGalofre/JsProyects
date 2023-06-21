/**
function palindromes(frase_a_valorar){
    if(frase_a_valorar.length == 0||frase_a_valorar.length == 1){
        return "true";
    } 
    if(frase_a_valorar[0]==frase_a_valorar[frase_a_valorar.length-1]){
        return palindromes(frase_a_valorar.substring(1,frase_a_valorar.length-1));
    }else{
        return "false";
    }

}
console.log(palindromes("abba"))
**/
/** 
function decimalToBinary(numero,respuesta){
    if (numero == 0){
        return respuesta;
    }
    respuesta =(numero%2).toString()+respuesta;
    console.log(respuesta)
    return decimalToBinary((Math.floor(numero/2)),respuesta);
}
console.log(decimalToBinary(233,""))
*/
/** 
function sumaNaturales(numero){
    //No se pone igual a 0, porque aunque aqui termina igual a cero, pueden existir casos en los que quede por debajo
    //de cero 
    if(numero <0){
        return 0;
    }
    return numero+sumaNaturales(numero-1);
}
console.log(sumaNaturales(10))
*/
/**
function binarySearch(arrayNumerosOrganizado,objetivo){
    const long=arrayNumerosOrganizado.length
    const mitad=arrayNumerosOrganizado[Math.floor(long/2)]
    const indiceMitad=arrayNumerosOrganizado.indexOf(mitad)
    if(objetivo==mitad){
        return "Encontrado, el numero es" + objetivo + "Y esta en el indice"+ indiceMitad
    } 
    if(objetivo>mitad){
        console.log(arrayNumerosOrganizado.slice(indiceMitad+1,long))
        return binarySearch(arrayNumerosOrganizado.slice(indiceMitad+1,long),objetivo)

    }else if ( objetivo<mitad){

        return binarySearch(arrayNumerosOrganizado.slice(0,indiceMitad-1),objetivo)
    }
    else{
        return "No ta"
    }
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9],10))
*/
/** 
function mergeSort(arrayDesorganizo){
    const long=arrayNumerosOrganizado.length
    const mitad=arrayNumerosOrganizado[Math.floor(long/2)]


}
*/

function generateRandom(min,max,cantidad){
    const arrayRandom=[];
    for(let i=0;i<cantidad;i++){
        let randomNumb = Math.floor((Math.random())*((max-min)+1));
        arrayRandom.push(randomNumb);
    }
    return arrayRandom 
}
console.log(generateRandom(1,100,100))
