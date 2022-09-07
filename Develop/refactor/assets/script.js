function generatePassword() {

  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var speccharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "~", "`"];

  var resultArray = [];
  var userArray = [];

  uppercaseArray [1]

    var numChar = prompt ("Your password must be between 8 and 128 characters long.");
    var numbers = confirm ("Ya want some numbers?");
    var uppercases = confirm ("YOU WANT SOME UPPERCASE LETTERS?");
    var lowercases = confirm ("ya want some lowercases?");
    var characters = confirm ("~Spice it up with special characters?~")

  if (numbers){
    resultArray = resultArray.concat(numberArray);
  }
  if (uppercases){
    resultArray = resultArray.concat(uppercaseArray);
  }
  if (lowercases){
    resultArray = resultArray.concat(lowercaseArray);
  }
  if (characters){
    resultArray = resultArray.concat(speccharArray);
  }
  console.log (resultArray);
  
  for (var i = 0; i < numCharacters; i++) {

    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
  }

  return userArray.join("");

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

