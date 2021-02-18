// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 25 ;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str
}

function suma(x, y) {
  var sumando= x + y
  return sumando
}

function resta(x, y) {
  var restando= x - y
  return restando
}

function multiplica(x, y) {
  var multiplicando= x * y
  return multiplicando
}

function divide(x, y) {
  var division= x / y
  return division
}

function sonIguales(x, y) {
  var iguales= x == y
  return iguales
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length == str2.length) {
    return true 
  }
  return false
}

function menosQueNoventa(num) {
  if (num < 90) {
    return true
  }
  return false
}
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:


function mayorQueCincuenta(num) {
  if (num > 50) {
    return true
  }
  return false
}
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:


function obtenerResto(x, y) {
  var resto= x % y
  return resto
}

function esPar(num) { 
  if (num % 2 == 0 ) {
    return true
  }
  return false
}
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:


function esImpar(num) {
  if (num % 2 > 0 ) {
    return true
  }
  return false
}
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:


function elevarAlCuadrado(num) {
  var elevado= Math.pow(num, 2)
  return elevado
}
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:

function elevarAlCubo(num) {
  var otroelevado= Math.pow(num, 3)
  return otroelevado
}
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:


function elevar(num, exponent) {
  var maselevados= Math.pow(num, exponent)
  return maselevados
}
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:


function redondearNumero(num) {
  var redondeo= Math.round(num)
  return redondeo
}
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:


function redondearHaciaArriba(num) {
  var redondeo= Math.ceil(num)
  return redondeo
}
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:


function numeroRandom() {
  var azar= Math.random()
  return azar
}
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()


function esPositivo(numero) {
  if (numero > 0) {
    return("Es positivo")
  } else if (numero < 0 ) {
    return("Es negativo")
  } else {
    return false
  }
}

  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

function agregarSimboloExclamacion(str) {
  var simbolo= str + "!"
  return simbolo
}
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:


function combinarNombres(nombre, apellido) {
  var presentacion= nombre + " " + apellido
  return presentacion
}
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:


function obtenerSaludo(nombre) {
  var saludo= "Hola " + nombre + "!"
  return saludo
}
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:


function obtenerAreaRectangulo(alto, ancho) {
  var area= alto * ancho
  return area
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
}


function retornarPerimetro(lado){
  var perimetro= lado * 4
  return perimetro
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
}


function areaDelTriangulo(base, altura){
  var areaT= (base * altura) / 2
  return areaT
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  var cambio= euro * 1.20
  return cambio
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  if (letra == "a") {
    return ("Es vocal")
    } else if (letra == "e") {
    return ("Es vocal")
    } else if (letra == "i") {
    return ("Es vocal")
    } else if (letra == "o") {
    return ("Es vocal")
    } else if (letra == "u") {
    return ("Es vocal")
    } else if (letra.length > 1) {
      return ("Dato incorrecto")
    }
  }
  
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
