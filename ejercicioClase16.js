//crea una funcion que elimine el primer y ultimo caracter de un string
//recibido por parametros.

const string = (array) => {
  const creaArray = array.split("");
  creaArray.shift();
  creaArray.pop();
  return creaArray;
};
console.log(string("Guille"));
