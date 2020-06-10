// User Interface Logic
let englishWord = 0;
const vowels = ["a", "e", "i", "o", "u"];

function isVowel (firstLetter, vowel) {
  // function should check the first letter of a word and see if it is a vowel
  if (firstLetter === vowel) {
    $("#output").append(firstLetter + "hay");
  }
}

function firstConsonant (firstLetter, vowel) {
  if (firstLetter != vowel) {
    const pigLatinLetters = (wordLetters.slice(0)).push;    
    const pigLatinWord = pigLatinLetters.join("");
    $("#output").append(pigLatinWord);
  }
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    // gather user input from HTML forms
    englishWord = $("input#english-word").val();

    const wordLetters = englishWord.split("");


    for (i = 0; i < vowels.length; i++) {
      isVowel (englishWord.charAt(0), vowels[i])
    }

    // ex: Dog > [o, g, d]
    if (wordLetters[0] != "a" && wordLetters[0] != "e" && wordLetters[0] != "i" && wordLetters[0] != "o" && wordLetters[0] != "u") {
      firstConsonant (englishWord, vowels[i]);
    }
  });
});
