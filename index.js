const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"

let startsWithA = function(word) {
    if (word.slice(0, 1).toLowerCase != "a") {
      return false;
    }
    
    return true; 
}; 

console.log(getValidInput("Input a word that starts with the letter 'a'.", startsWithA));

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code! 