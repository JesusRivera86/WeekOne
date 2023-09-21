//Escribe una función que reciba una palabra y revise si es un palíndromo.

const reviewPalindrome = (word) => {
  const wordReverse = word.split("").reverse().join("");
  if (word.toLowerCase() === wordReverse.toLowerCase()) {
    return "La palabra es palindromo";
  } else {
    return "Lo siento,sigue intentandolo";
  }
};
console.log(reviewPalindrome("Ana"));
