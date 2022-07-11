// Assignment code here
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function generatePassword() {
var password = "";
var passwordChar = "";
// creates user prompt to select password length
var passwordLengthUser = prompt("How many characters would you like your password to be? Password must be between 8-128 characters.");
passwordLengthUser = parseInt(passwordLengthUser);
if (passwordLengthUser < 8) {
alert("Password must have more than 7 characters!");
return "";
}
if (passwordLengthUser > 128) {
alert("Password much not have more than 128 characters!");
return ""
}
// creates confirm boolean for lowercase "yes or no"
var lowercaseCharactersChoice = confirm("Add in some lowercase characters?");
if (lowercaseCharactersChoice) {
passwordChar += lowercaseChar;
}
// creates confirm boolean for uppercase "yes or no"
var uppercaseCharactersChoice = confirm("How about a few uppercase characters?");
if (uppercaseCharactersChoice) {
passwordChar += uppercaseChar;
}
// creates confirm boolean for lowercase "yes or no"
var numericalCharactersChoice = confirm("How about numbers? Would you like to add them to yours?");
if (numericalCharactersChoice) {
passwordChar += numericalChar;
}
// creates confirm boolean for special characters "yes or no"
var specialCharacterChoice = confirm("Your password is pretty secure already, but some special characters could be handy. Add special characters?");
if (specialCharacterChoice) {
passwordChar += specialChar;
}
for (var i = 0; i < passwordLengthUser; i++) {
password += passwordChar[Math.floor(Math.random() * passwordChar.length)]

}

console.log(password);
return password;

console.log(writePassword)
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

