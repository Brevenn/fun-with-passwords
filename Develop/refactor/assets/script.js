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

// determine the length of the password

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

// determine if uppercases go into the password or not.

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


// determine if numbers go into the password or not

  function determineNumbers(){
    numberCheck = prompt("Wou1d y0u l1ke t0 add number5? Yes or No:");
      numberCheck = numberCheck.toLowerCase();

      if(numberCheck === null || numberCheck === ""){
        alert("Please answer Yes or No!");
        determineNumbers();

      }else if (numberCheck === "yes"){
        numberCheck = true;
        return numberCheck

      }else if (numberCheck === "no"){
        numberCheck = false; 
        return numberCheck;

      }else {
        alert("Please answer Yes or No!");
        determineNumbers();
      }
      return numberCheck;
  }



  function determineSpecial(){
    specialCheck = prompt("Wou1d y0u l1ke t0 add special5? Yes or No:");
      specialCheck = specialCheck.toLowerCase();

      if(specialCheck === null || specialCheck === ""){
        alert("Please answer Yes or No!");
        determineSpecial();

      }else if (specialCheck === "yes"){
        specialCheck = true;
        return specialCheck

      }else if (specialCheck === "no"){
        specialCheck = false; 
        return specialCheck;

      }else {
        alert("Please answer Yes or No!");
        determineSpecial();
      }
      return specialCheck;
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

