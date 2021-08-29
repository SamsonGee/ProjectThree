// All of the options in arrays seperated by type
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '='];

//randomizor function 

/* var randomizor = function() {
  var requirements = chain;
  requirements.sort (() =>Math.random() -.5);
  if (requirements.length > length) {
    requirements.length = length;
    };  
  return requirements;
  };
 */

//function to get the lenght of passwords
var getPasswordlength = function(){
  var length = "";
  while (length === "" || length === null) {
    length = prompt("How long do you need your password? (Between 8-128 characters)");
  }
  
  //converts the text into a number
  length = parseInt(length);
  
  //compares number to password length requirements 
  if (length < 8 || length > 128) {
    alert("Please enter a valid password length and try again!")
    getPasswordlength();
  }

  //sends received info to variable
  return length;
};

//figures out what characters we are using
var passwordRequirements = function () {
  
  //starts off with lowercase alphabet and create a chain of any and all characters needed
  var chain = lowerCase;
  
  //prompt asking if we need to include uppercasing with the password 
  promptCasing = confirm ("Does your passwords need both lower and upper case?")
    
  // if so, we add the upperCase to the now (possibly shortened) randomized lowercase password 
    if (promptCasing) {
      var chain = chain.concat(upperCase);
    };

    //prompt asking if we need to include numbers with the password 
    promptnumbers = confirm("Does your password need to include a number?")
      //if so we add numbers to the existing password
      if (promptnumbers) {
        var chain = chain.concat(numbers);
      };
  
    // prompt to add symbols to the password 
    promptSymbols = confirm ("Does your password need a symbol included?")
    if (promptSymbols){
      var chain = chain.concat(symbols);
    };
  
/*   //randomize this grouping
  chain.sort (() =>Math.random() -.5);
  if (chain.length > length) {
    chain.length = length;
    };  
   */

  // return chain
  return chain;  
};

// function to see what we will be using
var getCharacterSet = function (){
  var requirements = passwordRequirements();
/*   debugg
  for (var i = 0, i < ) */
  return requirements;
};
/* 
//function to confirm the randomized items are containing all the requirements
var confirmRequirements = function (){
  characters;
  if (characters.some(item => lowerCase.includes(item))) {
  }
  else {
    randomizor();
  }
}; */

var generatePassword = function () {
  length = getPasswordlength();
  requirements = getCharacterSet();
  var characters = confirmRequirements();
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