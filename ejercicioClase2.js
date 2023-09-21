/*declara la variable de las dos formas posibles, e imprime por consola los dos valores*/

const prompt = require("prompt-sync")({ sigint: true });

const variable1 = Number(prompt("dame el valor primero "));
let variable2 = Number(prompt("Dame el valor segundo "));
console.log(
  `El valor 1 es de: ${variable1} y el valor del 2 es de: ${variable2}`
);
