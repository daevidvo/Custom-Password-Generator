// Assignment Code
var generateBtn = document.querySelector("#generate");

const specialcharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~"]
const lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
const uppercaseletters = lowercaseletters.toLocaleUpperCase()

var passlengthprompt;
var lowercaseconfirmation;
var uppercaseconfirmation;
var speccharsconfirmation;

function generatePassword() {
  function passlength() {
    passlengthprompt = prompt("How long would you like your password to be?", "Number");
    if (passlengthprompt < 8) {
      alert("password too short");
    } else if (passlengthprompt > 128){
      alert("password is too long");
    } else {
      lowercase()
    }
  }

  function lowercase() {
    lowercaseconfirmation = confirm("Would you like lowercase letters?")
    uppercase();
    return lowercaseconfirmation;
  }

  function uppercase() {
    uppercaseconfirmation = confirm("Would you like uppercase letters?")
    specchars()
    return uppercaseconfirmation;
  }

  function specchars() {
    speccharsconfirmation = confirm("Would you like special characters?")
    return speccharsconfirmation;
  }

  passlength();



  
  return;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

