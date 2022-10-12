const palindromes = function (string) {
  string = string.trim().toLowerCase();
  const letters = Array.from(string).filter(character => /[a-z]/.test(character));

  const len = letters.length;
  for (let i = 0; i < len / 2; i++) {
    if (letters[i] !== letters[len - 1 - i]) return false;
  }
  return true;
};

/* Another way to solve

const palindromes = function (string) {
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  reversedString = processedString.split("").reverse().join("");
  return reversedString === string;
};

*/

// Do not edit below this line
module.exports = palindromes;
