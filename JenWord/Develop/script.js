// Assignment code here
// var generatePassword = $ ('#generate')
// var writePassword = $ ('#generate')


// // Get references to the #generate element
//  var generateBtnEl = $('#generate-btn');
// var generatePasswordEl = $('#password');
// var writePasswordEl = $('#writePassword');
// var randomEl = $('#random');


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
  

  passwordText.value = password('');{
  //  Generator function 
  }

function generatePassword(){
  console.log('click the button');
  return "Password"
}





// // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword),
//   var random = Math.floor(Math.random() * 8) + 128; 
//   console.log(random);
//   generatePasswordEl.text(random);
// });

function getPassword() {
  const chars =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyza#$%^&*()_+?><:{}[]";
  let passwordLength = 8;
  let password = '';
 
  for (let i = 0; i < passwordLength; i++){
    let randomNumber = Math.floor(Math.random()
    * chars.length);
    
    password += chars.substring(randomNumber,randomNumber + 1);
  }
  document.getElementById('password').value= password;
}
// generateEl.addEventListener('click', ()=> {(
