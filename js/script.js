// Assignment Code
var generateBtn = document.querySelector("#generate");


const numbers = '1234567890';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz'

function generatePassword() {
  var length = prompt('type a passsword length between 8 and 128 characters:');
  // validate length is acceptable
  if(length < 8 || length > 128){
    alert('Please type a numerical value between 8 and 128.');
    var length = prompt('type a passsword length between 8 and 128 characters:');
  }
  var wantsUppercase = confirm('Presss OK if you would like uppercase letters');
  var wantsLowercase = confirm('Press OK for lowercase letters.');
  var wantsSpecialCharacters = confirm('Press OK for special characters.')
  var specialCharacters = '!@#$%^&*()_+{}><?+-//[]~';
  var wantsNumbs = confirm('Press OK if you would like numbers.')
  var passPool  = '';
  
  // convert value of length to an integer
  length = Number(length);

  // adding chosen characters to the pool of characters to pull from

  if(wantsUppercase){
    passPool += uppercase;
  }

  if(wantsLowercase){
    passPool += lowercase;
  } 

  if(wantsSpecialCharacters){
    passPool += specialCharacters;
  }

  if(wantsNumbs){
    passPool += numbers;
  }

  // validate one character type has been selected
  if(wantsUppercase === false && wantsLowercase === false && wantsSpecialCharacters === false && wantsNumbs === false){
    var errorMsg = alert('You must select at least one character type, please cick the button and try again.');
  }

  // select characters from pool and assign to passwordResult until length is reached
let passwordResult ='';
  for(var i = 0; i < length; i++){
    passwordResult += passPool[Math.floor(Math.random() * (passPool.length-1) +1)];
  }
  
  return passwordResult;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// call writePassword function to print password in text box


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



