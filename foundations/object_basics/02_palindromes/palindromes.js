const palindromes = function (text) {
  const lowerText = text.toLowerCase();
  const cleanText = lowerText.replace(/[^a-z0-9]/g, "");
  const letters = cleanText.split("");
  const reversedText = letters.reverse().join("");

  return cleanText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
