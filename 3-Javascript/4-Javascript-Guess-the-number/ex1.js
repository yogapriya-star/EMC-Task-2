var prompt = require("prompt-sync")()
function guess(guessNumber)
{
    var randomNumber = Math.floor(Math.random()*5)+1;
    if(guessNumber > 5){
        console.log("Please enter the number less than or equal to 5");
    }
    else if(randomNumber == guessNumber)
    {
        console.log("Your guess is right");
    } else {
        console.log("Your guess is wrong, Generated random number is: "+randomNumber);
    }
}

var guessNumber = prompt();
guess(guessNumber);