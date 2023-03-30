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
  
  function criteriaSelector() { // this was tedious to make
    Number(passLength); //takes the input that the user gave us (which will now always be a number if it made it this far) and converts it into an integer
    if (lc && uc && sc && nc) { //when user answers yes to all prompts this will execute
      for (var x=0;x<passLength;x=x+1) { //for loop will iterate depending on the number the user has given us
        let arrayChosen = arrayChooser(4);//arrayChooser() function will generate a random number between 0 and whatever the input (in this case 4) is. This is here to TRULY randomize what characters are going where instead of having it be lowercase letter, uppercase letter, special character, and number, in that pattern until the for loop ends
        if (arrayChosen === 3) { //if arrayChooser() selects 3, it will trigger the numArrayFunc()
          numArrayFunc();
        } else if (arrayChosen === 2) { //if arrayChooser() selects 2, it will trigger lcArrayFunc()
          lcArrayFunc();
        } else if (arrayChosen === 1) { //if arrayChooser() selects 1, it will trigger ucArrayFunc()
          ucArrayFunc();
        } else if (arrayChosen === 0) { //if arrayChooser() selects 0, it will trigger scArrayFunc()
          scArrayFunc();
        }
      }
    } else if (lc && uc && sc && !(nc)) { //when the user answers yes to the first three prompts but not the last one
      for (var x=0;x<passLength;x=x+1) {
        let arrayChosen = arrayChooser(3);
        if (arrayChosen === 2) {
          lcArrayFunc();
        } else if (arrayChosen === 1) {
          ucArrayFunc();
        } else if (arrayChosen === 0) {
          scArrayFunc();
        }
      }
    } else if (lc && sc && nc && !(uc)) { //when the user answers yes to the first, third, and last prompt but not the second one
      for (var x=0;x<passLength;x=x+1) {
        let arrayChosen = arrayChooser(3);
        if (arrayChosen === 2) {
          lcArrayFunc();
        } else if (arrayChosen === 1) {
          scArrayFunc();
        } else if (arrayChosen === 0) {
          numArrayFunc();
        }
      }
    } else if (uc && sc && nc && !(lc)) { //when the user only answers yes to the last three prompts  
      for (var x=0;x<passLength;x=x+1) {
        let arrayChosen = arrayChooser(3);
        if (arrayChosen === 2) {
          ucArrayFunc();
        } else if (arrayChosen === 1) {
          scArrayFunc();
        } else if (arrayChosen === 0) {
          numArrayFunc();
        }
      }
    } else if (lc && uc && nc && !(sc)) { //when the user answers yes to all the prompts except the third one 
      for (var x=0;x<passLength;x=x+1) {
        let arrayChosen = arrayChooser(3);
        if (arrayChosen === 2) {
          lcArrayFunc();
        } else if (arrayChosen === 1) {
          ucArrayFunc();
        } else if (arrayChosen === 0) {
          numArrayFunc();
        }
      }
    } else if (lc && uc && !(sc && nc)) { //when the user only answers yes to first two prompts  
      for (var x=0;x<passLength;x=x+1) {
        let arrayChosen = arrayChooser(2);
        if (arrayChosen === 1) {
          lcArrayFunc();
        } else if (arrayChosen === 0) {
          ucArrayFunc();
        }
      }
    } else if (lc && sc && !(uc && nc)) { //when the user only answers yes to the first and third prompt 
      for (var x=0;x<passLength;x=x+1) {
        let arrayChosen = arrayChooser(2);
        if (arrayChosen === 1) {
          lcArrayFunc();
        } else if (arrayChosen === 0) {
          scArrayFunc();
        }
      }
    } else if (lc && nc && !(uc && sc)) { //when the user only answers yes to the first and last prompt 
      for (var x=0;x<passLength;x=x+1) {
        let arrayChosen = arrayChooser(2);
        if (arrayChosen === 1) {
          lcArrayFunc();
        } else if (arrayChosen === 0) {
          numArrayFunc();
        }
      }
    } else if (uc && sc && !(lc && nc)) { //when the user only answers yes to the second and third prompt
      for (var x=0;x<passLength;x=x+1) {
        let arrayChosen = arrayChooser(2);
        if (arrayChosen === 1) {
          ucArrayFunc();
        } else if (arrayChosen === 0) {
          scArrayFunc();
        }
      }
    } else if (uc && nc && !(lc && sc)) { //when the user only answers yes to the second and last prompt
      for (var x=0;x<passLength;x=x+1) {
        let arrayChosen = arrayChooser(2);
        if (arrayChosen === 1) {
          ucArrayFunc();
        } else if (arrayChosen === 0) {
          numArrayFunc();
        }
      }
    } else if (sc && nc && !(lc && uc)) { //when the user only answers yes to the last two prompts 
      for (var x=0;x<passLength;x=x+1) {
        let arrayChosen = arrayChooser(2);
        if (arrayChosen === 1) {
          scArrayFunc();
        } else if (arrayChosen === 0) {
          numArrayFunc();
        }
      }
    } else if (lc && !(uc && sc && nc)){ //when the user answers yes to the first prompt only
      for (var x=0;x<passLength;x=x+1) {
        lcArrayFunc();
      }
    } else if (uc && !(lc && sc && nc)){ //when the user answers yes to the second prompt only
      for (var x=0;x<passLength;x=x+1) {
        ucArrayFunc();
      }
    } else if (sc && !(lc && uc && nc)){ //when the user answers yes to the third prompt only
      for (var x=0;x<passLength;x=x+1) {
        scArrayFunc();
      }
    } else if (nc && !(lc && uc && sc)){ //when the user answers yes to the fourth prompt only
      for (var x=0;x<passLength;x=x+1) {
        numArrayFunc();
      }
    } else {
      alert("Please choose criterias for your password"); //when the user inputs a number into the password generator but doesn't select any of the criterias
    }
  }
  
  function arrayChooser(max) { //function that generates a random number and that number is used to choose whether a lowercase letter (lcl or lc), uppercase letter (ucl or uc), special character (sc), or number (num or nc) is going to be added to the password depending on the criterias the user has chosen
    return Math.floor(Math.random()*max);
  }

  function numArrayFunc() { //function for choosing a random index in the numbers array and adds it to the password that is going to be shown
    finalPassword.unshift(numArray[(Math.floor(Math.random() * numArray.length))]); //makes random number within array length then makes that number the index position within the array, then takes that element value in the array at that position and adds it to finalPassword array
  }

  function lcArrayFunc() {
    finalPassword.unshift(lcArray[(Math.floor(Math.random() * lcArray.length))]);
  }

  function ucArrayFunc() {
    finalPassword.unshift(ucArray[(Math.floor(Math.random() * ucArray.length))]);
  }

  function scArrayFunc() {
    finalPassword.unshift(scArray[(Math.floor(Math.random() * scArray.length))]);
  }

  //command below is the output of the generatePassword() function
  return finalPassword.join(""); //.join makes turns the finalPassword array into a string rather than having the array values be separated by a comma when shown to user
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