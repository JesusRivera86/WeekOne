//Crea una función que verifique si una cadena de texto recibida por parámetros
// es un pangrama (contiene todas las letras del abecedario).
const alphabet = (text) => {
  text = text.toLowerCase();
  const letters = "abcdefghijklmnñopqrstuvwxyz";
  for (let i = 0; i < letters.length; i++) {
    if (!text.includes(letters[i])) {
      return "no contiene toda las letras del abecedario";
    }
  }
  return "contiene todas las letras del abecedario";
};
console.log(alphabet("Fabio me exige sin tapujos que añada cerveza al whisky"));
