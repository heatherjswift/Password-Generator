var listOfLowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var listOfUpperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var listOfNumbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var listOfSpecial =[" ", "!", "'", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
  

var generateBtn = document.querySelector("#generate");

function writePassword() {

  var listOfAcceptable=[]

  var password = ""

  var passwordLength = 0

    passwordLength = window.prompt(
      "How long do you want your password to be? Please type a number between 8 and 128."
    );
      console.log(passwordLength)
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please input a number between 8 and 128, try again!");
      return writePassword();
    }

    var needLowerCase = window.confirm("Do you want lower-case letters in your password?")

    if (needLowerCase){
      var lowerCaseIndex = Math.floor(Math.random() * (listOfLowerCase.length))
      var lowerCase = listOfLowerCase[lowerCaseIndex]
      password= password + lowerCase
      passwordLength = passwordLength -1
      listOfAcceptable=listOfAcceptable.concat(listOfLowerCase)
      console.log(listOfAcceptable)
  }
    
    var needUpperCase = window.confirm("Do you want upper-case letters in your password?")

    if (needUpperCase){
        var upperCaseIndex = Math.floor(Math.random() * (listOfUpperCase.length))
        var upperCase = listOfUpperCase[upperCaseIndex]
        password= password + upperCase
        passwordLength = passwordLength -1
        listOfAcceptable=listOfAcceptable.concat(listOfUpperCase)
    }

    var needNumber = window.confirm("Do you want numbers in your password?")

     if (needNumber){
      var numberIndex = Math.floor(Math.random() * (listOfNumbers.length))
      var numbers = listOfNumbers[numberIndex]
      password= password + numbers
      passwordLength = passwordLength -1
      listOfAcceptable=listOfAcceptable.concat(listOfNumbers)
    }

    var needSpecial = window.confirm("Do you want special characters in your password?")

      if (needSpecial){
      var specialIndex = Math.floor(Math.random() * (listOfSpecial.length))
      var special = listOfSpecial[specialIndex]
      password= password + special
      passwordLength = passwordLength -1
      listOfAcceptable=listOfAcceptable.concat(listOfSpecial)
    }

      for (var i=0; i < passwordLength; i++){

        var index = Math.floor(Math.random() * (listOfAcceptable.length))
        var randomCharater = listOfAcceptable[index]
        password= password + randomCharater
      }
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);