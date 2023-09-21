/*Imprime por consola el estring 'Hello World*/

//const saludo = "Hello world";
//console.log(saludo);

/*cambia ahora el valor de una de las dos variables e imprime por consola*/

/*const prompt = require("prompt-sync")({ sigint: true });

const variable1 = Number(prompt("Dame un valor "));
let variable2 = Number(prompt("Dame el segundo valor"));
console.log(`${variable2 + variable1}`);*/

/*Crea una funcion que imprima por consola el string 'Hello World*/

/*function string() {
  return "Hello World";
}
console.log(string());*/

/*Crea una funcion que,al ser llamada,imprima por consola el resultado de la
multiplicacion de dos numeros introducidos como parametros*/

/*function multiplicar(Number1, Number2) {
  return Number1 * Number2;
}
console.log(multiplicar(3, 5));*/

/*crea una funcion que imprima por consola el resultado de elevar al cubo un numero 
dado como parametro*/
/*function cubo(number1) {
  return Math.pow(number1, 3);
}
console.log(cubo(5));*/

/*crea una funcion que imprima por consola un numero al azar entre 0 y 10.*/

/*adivina el numero:crea una funcion que primero guarde en una variable un numero
aleatorio del 1 al 10.Despues,pregunte al usuario a traves de un prompt un numero
del 1 al 10.Una vez recibida la respuesta,compare estos dos numeros.Si los numeros
coinciden,imprime por consola un string indicando que el usuario a acertado,si no,
imprime por consola que el usuario a fallado seguido del numero correcto.*/

/*function adivina() {
  const numeroAleatorio = Math.floor(Math.random() * 10 + 1);
  console.log(numeroAleatorio);
  const promp = prompt("dame un numero del 1 al 10 ");
  if (numeroAleatorio === promp) {
    console.log("enhorabuena,has acertado ");
  } else {
    console.log(`Has fallado,el numero es: ${numeroAleatorio}`);
  }
}
adivina();*/

/*Crea una función que reciba un número como parámetro e imprima por consola
 si el número dado es par o impar.*/

/*function parOimpar(numero1) {
  const numero = Number(prompt("Dame un numero "));
  if (numero % 2 === 0) {
    return "El numero es par ";
  } else {
    return "El numero es impar ";
  }
}
parOimpar();*/

/*Crea una función que reciba un parámetro de tipo string e imprima por consola
 el string revertido. (ejemplo: 'casa' => 'asac).*/

/*function reverse(texto) {
  const separar = texto.split("");
  const invertir = separar.reverse();
  const unir = invertir.join("");
  console.log(unir);
}
reverse("hola");*/

/*Crea una función que imprima por consola la tabla de multiplicar
 de un número introducido como parámetro.*/

const tablaDeMultiplicar = (number) => {
  let table = "";
  for (let i = 0; i <= 10; i++) {
    const resultado = number * i;
    table += ` ${number} x ${i} = ${resultado}\n`;
  }
  return table;
};
console.log(tablaDeMultiplicar(7));

/*Crea una función que reciba un número por parámetros e imprima por consola
 si el número recibido es un número primo.*/

function numeroPrimo(numero) {
  numero = Number(prompt("Introduce un  numero "));
  if (numero % 1 === 0) {
    return "Este numero no es un numero primo";
  }
  return "Este numero es un  numero primo";
}
numeroPrimo();
