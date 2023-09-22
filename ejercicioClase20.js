//Escribe una función que compruebe si una cadena de texto contiene todas las vocales.
const vowelCheker = (word) => {
  const vowels = "aeiou";
  word = word.toLowerCase();
  for (let vowel of vowels) {
    if (!word.includes(vowel)) {
      return false;
    }
  }
  return true;
};
console.log(vowelCheker("manolito gafotas"));
