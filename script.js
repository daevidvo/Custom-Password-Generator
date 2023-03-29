// Assignment Code
var generateBtn = document.querySelector("#generate");

const lcl = "abcdefghijklmnopqrstuvwxyz";
const ucl = lcl.toLocaleUpperCase(); //turns the lcl string to uppercase letters and assign it a new name ucl
const nums = "1234567890"

const lcArray = lcl.split(""); //turns the lcl old string into an array
const ucArray = ucl.split(""); //turns the ucl old string into an array
const numArray = nums.split("")
const scArray = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~"]; //special characters array

// thought process for finalPassword generator: make a random number generator that is generating 0<=x<=2 depending on which criteria was given, assign the arrays above to a numbers 0-2, then whatever number the generator makes, use if then statements to determine the array that we use, then we use another random number generator to pick out something from the array (within its length) and adds that to a new array for our final password

function generatePassword() {
  var finalPassword = []; //moved empty finalPassword array into generatePassword() function so that it resets to an empty array every time we generate a new password 
  function passLengthFunc() {
    passLength = prompt("How long would you like your password to be?"); //prompts for length
    if (passLength === null) { //if the user cancels instead of writing an input
      alert("Please choose a number");
    } else if (isNaN(Number(passLength))) { //fixes bug where if a user input anything other than a number, it would allow them to continue to lcPromptFunc()
      // WOW I FINALLY GOT THIS TO WORK IT ONLY TOOK ME LIKE AN HOUR credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
      alert("Please use numbers only"); //warns the user to use numbers only if they were to input anything other than an number
    } else if (passLength < 8) {
      alert("Password length must be more than 7"); 
    } else if (passLength > 128) {
      alert("Password length must be less than 129");
    } else {
      lcPromptFunc(); //goes to prompt the user if they want lowercase letters in their password. Does not continue to lcPromptFunc() if the user cancels or input anything other than a number
    }
  }

  function lcPromptFunc() {
    lc = confirm("Would you like lowercase letters in your password?");
    ucPromptFunc();
    return lc; //needs to return lc boolean value so that criteriaSelector() can compare the values and chooses the right password criterias
  }

  function ucPromptFunc() {
    uc = confirm("Would you like uppercase letters in your password?");
    scPromptFunc();
    return uc; //returns uc for same reason on line 34
  }

  function scPromptFunc() {
    sc = confirm("Would you like special characters in your password?");
    numsPromptFunc();
    return sc; //returns sc for the same reason on line 34
  }

  function numsPromptFunc() {
    nc = confirm("Would you like numbers in your password?");
    criteriaSelector();
    return nc; //returns nc for the same reason on line 34
  }
  passLengthFunc() // starts the series
  
  function criteriaSelector() {
    Number(passLength);
    if (lc && uc && sc && nc) {
      for (var x=0;x<passLength;x=x+1) {
        let y = arrayChooser(4);
        if (y === 3) {
          let z = Math.floor(Math.random() * numArray.length);
          z = numArray[z];
          finalPassword.unshift(z);
        } else if (y === 2) {
          let z = Math.floor(Math.random() * lcArray.length);
          z = lcArray[z];
          finalPassword.unshift(z);
        } else if (y === 1) {
          let z = Math.floor(Math.random() * ucArray.length);
          z = ucArray[z];
          finalPassword.unshift(z);
        } else if (y === 0) {
          let z = Math.floor(Math.random() * scArray.length);
          z = scArray[z];
          finalPassword.unshift(z);
        }
      }
    } else if (lc && uc && sc) {
      for (var x=0;x<passLength;x=x+1) {
        let y = arrayChooser(3);
        if (y === 2) {
          let z = Math.floor(Math.random() * lcArray.length);
          z = lcArray[z];
          finalPassword.unshift(z);
        } else if (y === 1) {
          let z = Math.floor(Math.random() * ucArray.length);
          z = ucArray[z];
          finalPassword.unshift(z);
        } else if (y === 0) {
          let z = Math.floor(Math.random() * scArray.length);
          z = scArray[z];
          finalPassword.unshift(z);
        }
      }
    } else if (lc && uc) {
      for (var x=0;x<passLength;x=x+1) {
        let y = arrayChooser(2);
        if (y === 1) {
          let z = Math.floor(Math.random() * lcArray.length);
          z = lcArray[z];
          finalPassword.unshift(z);
        } else if (y === 0) {
          let z = Math.floor(Math.random() * ucArray.length);
          z = ucArray[z];
          finalPassword.unshift(z);
      }
      }
    } else {
      for (var x=0;x<passLength;x=x+1) {
        let z = Math.floor(Math.random() * lcArray.length);
        z = lcArray[z];
        finalPassword.unshift(z);
      }
    }
  }
  
  function arrayChooser(max) {
    return Math.floor(Math.random()*max);
  }
  
  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //the return value of generatePassword() function should be the string value of the password we generated
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// credits https://www.w3schools.com/jsref/jsref_obj_array.asp, https://www.w3schools.com/jsref/jsref_obj_string.asp