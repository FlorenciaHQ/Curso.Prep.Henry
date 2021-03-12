// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  var array=[]
  for (var clave in objeto) {
    array.push([clave, objeto[clave]])
  }
  return array
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
}


function numberOfCharacters(string) {
  var obj = {}
  for(var i = 0; i< string.length; i++){
      var aux= string[i]
      if(!obj[aux]){
          var suma= 1
          obj[aux] = suma
          for(var j = i+1; j<string.length; j++){
              if(string[j] == aux){
                  suma = suma+1
                  obj[aux] = suma
              }
          }

      }
  }

return obj
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
} //function numberOfCharacters(string) {
  //var objeto= {}
  //for(var i= 0; i< string.length ; i++) {
      //if(!objeto[string[i]]) {
          //objeto[string[i]] = 0
      //}
      //objeto[string[i]] += 1
  //}
//return objeto
//}


function capToFront(s) {
  var mayus= []
  var minus= []
  for(var i=0; i< s.length ; i++) {
    if(s[i] === s[i].toUpperCase()) {
        mayus.push(s[i])
    }
    if(s[i] !== s[i].toUpperCase()) {
      minus.push(s[i])
    }
  }
  mayus= mayus.join('')
  minus= minus.join('')
  var str= mayus + minus
  return str
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
}


function asAmirror(str) {
  var otro= str.split('').reverse()
  var suma= ""
  var mas= []
  for(var i=0; i< otro.length ; i++) {
      if(otro[i] != " ") {
         suma= suma + otro[i]   
      }
      if(otro[i] == " ") {
          mas.unshift(suma)
          suma= ""
      }
      if(i == otro.length -1 ){
          mas.unshift(suma)
      }        
  }
   return mas.join(' ')

  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} 


function capicua(numero){
  numero= numero.toString()
  for(var i=0 ; i< numero.length; i++) {
    var a= numero.length -i-1
    if(numero[i] === numero[a]) {
      numero
    } 
    if (numero[i] !== numero[a]) {
      return "No es capicua"
    }
  }
  return "Es capicua"
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
}


function deleteAbc(cadena){
  var otra= []
  for(var i=0 ; i< cadena.length ; i++){
    if (cadena[i] != "a" && cadena[i] != "b" && cadena[i] != "c") {
      otra.push(cadena[i])
    }
  }
  otra= otra.join('')
  return otra
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  var nuevoArr= []
  while(arr.length >0) {
    var nombre= arr[0]
    var cantCaracteres= arr[0].length
    var posicion= 0
    for(var i=0 ; i< arr.length ; i++) {
      if(arr[i].length < cantCaracteres ) {
          nombre= arr[i]
          cantCaracteres= arr[i].length
          posicion= i
      }
    }
    nuevoArr.push(nombre)
    arr.splice(posicion, 1)
  }
  return nuevoArr
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
} //function sortArray(arr) {
  //return arr.sort(function(elementoA, elementoB) {
   //return elementoA.length - elementoB.length
 //}) 
//}


function buscoInterseccion(arreglo1, arreglo2){
  var algo= []
  for(var i=0 ; i< arreglo1.length ; i++){
    for(var a=0 ; a< arreglo2.length ; a++) {
      if(arreglo1[i] == arreglo2[a]) {
        algo.push(arreglo1[i])
      }
    }
  }
  return algo
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

