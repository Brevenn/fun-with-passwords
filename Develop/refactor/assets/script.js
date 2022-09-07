// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!@#$%&'()*+,-./:;<=>?";
  var numberChar = "0123456789";
  var passwordLength;
  var uppercaseCheck;
  var numberCheck;
  var specialCheck;


  function determineLength(){
    passwordLength = prompt("Welcome to my password randomizer! Your password must be between 8 and 128 character long. Enter how many you would like below!");

      if(passwordLength < 8){
        alert("Password must be between 8 and 128 characters long!");
        determineLength();
      }else if(passwordLength > 128){
        alert("Password must be between 8 and 128 characters long!");
        determineLength();
      }else if(isNaN(passwordLength)){
        alert("Password must be between 8 and 128 characters long!");
        determineLength();
      }else{
        alert("Great, go through the next couple of questions to determine your password style!");
      }
      return passwordLength;
  }

  function determineUppercase(){
    uppercaseCheck = prompt("WOULD YOU LIKE SOME UPPERCASE CHARACTERS? Yes or No:");
      uppercaseCheck = uppercaseCheck.toLowerCase();

      if(""){
        alert("Please answer Yes or No!");
        determineUppercase();

      }else if (uppercaseCheck === "yes"){
        uppercaseCheck = true;
        return uppercaseCheck

      }else if (uppercaseCheck === "no"){
        uppercaseCheck = false; 
        return uppercaseCheck;

      }else {
        alert("Please answer Yes or No!");
        determineUppercase();
      }
      return uppercaseCheck;
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

