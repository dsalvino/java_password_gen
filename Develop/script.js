// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function startPassword() {
  var userInputWant = [];
  var collectedCharacters = [];

  var uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
  var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm".split("");

  var numbersCharacters = "1234567890".split();

  var fancyCharacters = "\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~".split();

  var lengthMessage = prompt("Enter desired length of password (between 8 - 128 characters): ");
  if (lengthMessage < 8) {
    alert("Must be more than 8 characters!");
    return;
  }
  if (lengthMessage > 128) {
    alert("Must be less than 128 characters!");
    return;
  }

  var confirmNumbers = confirm("Would you like to include Numbers in your password?");
  var confirmLettersLower = confirm("Would you like to include lowercase letters in your password?");
  var confirmLettersUpper = confirm("Would you like to include upperacse letters in your password?");
  var confirmFancyCharacters = confirm("Would you like special characters in your password?");

  if (confirmNumbers === true) {
    collectedCharacters = collectedCharacters.concat(numbersCharacters);
  }
  if (confirmLettersLower === true) {
    collectedCharacters = collectedCharacters.concat(lowercaseLetters);
  }
  if (confirmLettersUpper === true) {
    collectedCharacters = collectedCharacters.concat(uppercaseLetters);
  }
  if (confirmFancyCharacters === true) {
    collectedCharacters = collectedCharacters.concat(fancyCharacters);
  }

  for (var i = 0; i < lengthMessage; i++) {
    userInputWant.push (combinedArray[Math.floor(Math.random() * collectedCharacters.length)]);
  }
  return userInputWant.join("");
}

function writePassword() {
  var endPassword = startPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = endPassword;
}
