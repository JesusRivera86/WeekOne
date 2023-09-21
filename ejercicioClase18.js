const countVowels = (word) => {
  word = word.toLowerCase();
  let vowelCount = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelCount++; // Debes usar el operador de incremento (++) para contar las vocales
    }
  }
  return vowelCount;
};
console.log(countVowels("Fernando"));
