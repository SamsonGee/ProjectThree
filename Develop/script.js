// All of the options in arrays seperated by type
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '='];

//function to get the lenght of passwords
var getPasswordlength = function(){
  var passwordLength = "";
  while (passwordLength === "" || passwordLength === null) {
    passwordLength = prompt("How long do you need your password? (Between 8-128 characters)");
  }
  
  //converts the text into a number
  passwordLength = parseInt(passwordLength);
  
  //compares number to password length requirements 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length and try again!")
    getPasswordlength();
  }

  //sends received info to variable
  return passwordLength;
};

//figures out what characters we are using
var passwordRequirements = function (){
  
  //starts off with lowercase alphabet and create a chain of any and all characters needed
  var chain = lowerCase;
  
  //prompt asking if we need to include uppercasing with the password 
  promptCasing = confirm ("Does your passwords need both lower and upper case?")
    
  // if so, we add the upperCase to the now (possibly shortened) randomized lowercase password 
    if (promptCasing) {
      var casing = true;
      var chain = chain.concat(upperCase);
    };

    //prompt asking if we need to include numbers with the password 
    promptNumbers = confirm("Does your password need to include a number?")
      //if so we add numbers to the existing password
      if (promptNumbers) {
        var numeric = true;
        var chain = chain.concat(numbers);
      };
  
    // prompt to add symbols to the password 
    promptSymbols = confirm ("Does your password need a symbol included?")
    if (promptSymbols){
      var symbolic = true;
      var chain = chain.concat(symbols);
    };

    return chain;
};

// this function will test if the captured chain of letters can fit in the password requirements (i.e. length and still keep all options)
var confirmRequirements = function() {
  var characters = chain;

  // if the password length is less than the selected chain options
  if (passwordLength < characters.length) {
    //this randomizes the array
    characters.sort (() =>Math.random() -.5);
    //this then shortens the array to the amount of the passwordLength
    characters.length = passwordLength;
    //now we double check if the randomzied, shortened, removed any qualifying options like symbols or numbers or upperCase if they were selected, but how?
    return characters;
  }
  //this funciton will create a new variable, "characters" which will ensure it if the chain is long enough for the length, and if not, will add to it. 
  else {
    //while the "passwordLength" is greater than the chain length (how many arrays are being captured), we will continue to add to the chain length (just lowercase).
    while (characters.length < passwordLength) {
      //creates variable character to capture the chain and adds lower case to it.
      var characters = characters.concat(lowerCase);
      // if this new number's length isn't long enough, we do it again.
      }
    if (passwordLength < characters.length) {
      characters.length = passwordLength;
      //this randomizes the array
      characters.sort (() =>Math.random() -.5);
    }
    // send variable to generatePassword function
    return characters;
  }
};

var generatePassword = function () {
  passwordLength = getPasswordlength();
  chain = passwordRequirements();
  characters = confirmRequirements();
  var characters = characters.toString();
  var characters = characters.split(",");
  var generatePassword = characters.join('');
  return generatePassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  window.alert("Your generated password is '" + password +"'.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);