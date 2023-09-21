//Crea una función que imprima por consola la tabla de multiplicar de un número
//introducido como parámetro.

const tablaDeMultiplicar = (number) => {
  let table = "";
  for (let i = 0; i <= 10; i++) {
    const resultado = number * i;
    table += ` ${number} x ${i} = ${resultado}\n`;
  }
  return table;
};
console.log(tablaDeMultiplicar(7));
