let isLowerCase 
let isUpperCase
let areNumbers
let areSpecialCharacters

const passwordPopUp = () => {
  passChars = parseInt(prompt('How many characters would you like in your password?'))
  isLowerCase = confirm('wanna add lowercase letters?')
  isUpperCase = confirm('WANNA ADD UPPERCASES TO THE MIX?')
  areNumbers = confirm('h0w ab0ut s0me numb3rs t0 g0 w1th?')
  areSpecialCharacters = confirm('~~make your password special with special characters?!~~')
    console.log(isLowerCase, isUpperCase, areNumbers, areSpecialCharacters)

  if(isNaN(passChars) = true || passChars < 8 || passChars > 128 ) {
    alert('The password must be between 8 and 128 characters')
      passwordPopUp()
  }
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

