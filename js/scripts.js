// User Interface Logic
let englishWord = 0;
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

$(document).ready(function() {
  $("form#english-word").submit(function(event) {
    event.preventDefault();

    // gather user input from HTML forms
    englishWord = $("input#english-word").val();

  });
});

// Business Logic

// Function to ignore not alphabetic characters
for (i = 0; i < alphabet.length(); i++) {
  if (englishWord.indexOf(0) != alphabet[i]) {
    alert("Use only letters please");
  }
}
