//Crea una función que imprima por consola un número al azar entre 0 y 10.

const numberRandom = () => {
  const number = Math.floor(Math.random() * 10 + 1);
  return number;
};
console.log(`El numero al azar es de: ${numberRandom()}`);
