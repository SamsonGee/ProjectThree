//trial and error

// some constants needed for the password to pull from:

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHJIKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';



// Assignment code here

// when i press the button, via the generateBtn event, a variable "password" is captured.
  //the button pressing is already coded with the addEventListener, click, i think?? so the only thing I need to really test is the "writePassword" function that I need to press through.
    //the generatePassword function is what is the main code funciton I need to write.
      //What this function should do is create a variable capturing sequence via prompts
        //which after grabbing, 
        //then processed a random password, 
        //then displays that in the text box.

var passwordRequirements = function () {
//this is where we capture 'password requirements'
  var passwordPrompt = function() {
    var passwordLength = (window.prompt ("How long do you need your password? (Between 8-128 characters)")),
    var casing = (window.confirm ("Do you need both upper case and lower case?")),
    var numeric = (window.confirm ("Do you need to include a number?")),
    var character = (window.confirm ("Do you need to include a special character?")),
    }
};




//one all the 'password requriemnts' are captured, it is then combined< to generate a "password" and then displayed< in the TEXT BOX
  //all password requirements creates completedPassword?
// password info

//var completedPassword = [
 //   {length = lengthRequirement},
  //  {casing}, 
   // {numeric},
    //{character},
//];

// Assignment code here

//passwordText = {
//  lenght = lengthRequirement,
 // value = Math.random()


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


??
// All of the options in arrays seperated by type
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '='];

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
  
  //starts off with lowercase alphabet
  var requirements = lowerCase;
  
  //prompt asking if we need to include uppercasing with the password 
  promptCasing = confirm ("Does your passwords need both lower and upper case?")
    
  // if so, we add the upperCase to the now (possibly shortened) randomized lowercase password 
    if (promptCasing) {
      var requirements = requirements.concat(upperCase);
    };

    //prompt asking if we need to include numbers with the password 
    promptnumbers = confirm("Does your password need to include a number?")
      //if so we add numbers to the existing password
      if (promptnumbers) {
        var requirements = requirements.concat(numbers);
      };
  
    // prompt to add symbols to the password 
    promptSymbols = confirm ("Does your password need a symbol included?")
    if (promptSymbols){
      var requirements = requirements.concat(symbols);
    };

  //randomize this grouping
  requirements.sort (() =>Math.random() -.5);
  if (requirements.length > length) {
    requirements.length = length;
    };  
  return requirements;
};

// function to see what we will be using
var getCharacterSet = function (){
   var characters = passwordRequirements();
   var characters = characters.toString();
   return characters;
};

//function to confirm the randomized items are containing all the requirements
/* var confirmRequirements = function (){
  characters;
  if (characters.some(item => lowerCase.includes(item))) {
  }
  else {
    characters = characters.concat(lowerCase);
    characters.sort (() =>Math.random() -.5);
    if (requirements.length > length) {
    requirements.length = length;
    };  
    return characters;
  }
}; */

var generatePassword = function () {
  length = getPasswordlength();
  characters = getCharacterSet();
  /* confirmRequirements(); */
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