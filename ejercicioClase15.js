//Crea una función que reciba un número por parámetros e imprima por consola
//si el número recibido es un número primo.

const primeNumber = (num) => {
  if (num <= 1) {
    return false;
  }
  if (Math.floor(num) !== num) {
    // si son diferentes es pq num tiene decimales
    return false;
  }
  //  for (let i = 2; (i <= (Math.floor(Math.sqrt(num)))) ; i++){
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

if (primeNumber(27)) {
  console.log(`El número introducido ES PRIMO`);
} else {
  console.log(`El número introducido NO ES PRIMO`);
}

let x = "hola";
let y = x;
x = "adios";
console.log(x);
samplefunct(); //es una sentencia de invocación, () es un operador
//las expresiones son fragmentos de codigo que forman parte de las sentencias y se evaluan a un valor
// el símbolo = es un símbolo de asignación, y a la dcha SIEMPRE hay una expresión
// un if es una expresion que se evalua de manera booleana

let z = 1;
if (!z) {
  // z se va a evaluar en términos booleanos, truthy/falsy
  console.log("correcto");
}
// truthy y falsy
// todos los valores excepto los que dan false nos devuelven true
