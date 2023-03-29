// Assignment Code
var generateBtn = document.querySelector("#generate");

const lcl = "abcdefghijklmnopqrstuvwxyz"
const ucl = lcl.toLocaleUpperCase()

const lcArray = lcl.split("")
const ucArray = ucl.split("")
const scArray = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~"]

// make a random number generator that is generating 0<=x<=2 depending on which criteria was given, assign the arrays above to a numbers 0-2, then whatever number the generator makes, use if then statements to determine the array that we use, then we use another random number generator to pick out something from the array (within its length) and adds that to a new array for our final password

function generatePassword() {
  function passLengthFunc() {
    passLength = prompt("How long would you like your password to be?")
    if (passLength === null) {
      alert("Please choose a number")
    } else if (isNaN(Number(passLength))) {
      // WOW I FINALLY GOT THIS TO WORK IT ONLY TOOK ME LIKE AN HOUR credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
      alert("Please use numbers only")
    } else if (passLength < 8) {
      alert("Please choose a longer password length")
    } else if (passLength > 128) {
      alert("Please choose a shorter password length")
    } else {
      lcPromptFunc()
    }
  }

  function lcPromptFunc() {
    lc = confirm("Would you like lowercase letters in your password?")
    ucPromptFunc()
    return lc;
  }

  function ucPromptFunc() {
    uc = confirm("Would you like uppercase letters in your password?")
    scPromptFunc()
    return uc;
  }

  function scPromptFunc() {
    sc = confirm("Would you like special characters in your password?")
    criteriaSelector()
    return sc;
  }
  passLengthFunc() // starts the series

  function criteriaSelector() {
    Number(passLength)
    if (lc && uc && sc) {
      for (var x=0;x<passLength;x=x+1) {
        
      }
    } else if (lc && uc) {
      console.log("thing for when lc and uc criteria is met")
    } else {
      console.log("thing for when only lc criteria is met")
    }
  }

  return;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //the return value of generatePassword() function should be the string value of the password we generated
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

