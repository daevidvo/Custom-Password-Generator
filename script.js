// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
const uppercaseletters = lowercaseletters.toLocaleUpperCase()

const lowercasearray = lowercaseletters.split("")
const uppercasearray = uppercaseletters.split("")
const specialcharactersarray = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~"]

// make a random number generator that is generating between 0-2, assign the arrays above to a numbers 0-2, then whatever number the generator makes, use if then statements to determine the array that we use, then we use another random number generator to pick out something from the array (within its length) and adds that to a new array for our final password

function generatePassword() {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

