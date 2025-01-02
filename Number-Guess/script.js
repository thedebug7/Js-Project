// Let generate Random Number..
let RandomNum = Math.floor(Math.random() * 10) + 1;
let attemps = 0;

// Select DOM elements
const userGuessInput = document.getElementById("userGuess");
const GuessButton = document.getElementById("guessButton");
const RestartButton = document.getElementById("restartButton");
const ResultMessage = document.getElementById("message");

// Function to  Check User Guess....
const checkGuess = () => {
    const userGuess = parseInt(userGuessInput.value, 10);
    attemps ++;

    // Check User input is correct or Not 
    if(!userGuess || userGuess < 1 || userGuess > 10){
        ResultMessage.textContent = "⚠️ Please enter a valid number between 1 and 10.";
        return;
    }

    // Check the user Guess 

    if(userGuess === RandomNum){
        ResultMessage.innerHTML = `🎉 Congratulations! You guessed the number <strong>${RandomNum}</strong> in ${attemps} attempts.`
        userGuessInput.disabled = true; // Disable User input when user Guess Correct Answer
        GuessButton.disabled = true; // disable Guess Butten When Correct Get Corect Answer.
    }else if(userGuess < RandomNum){
        ResultMessage.textContent = "📉 Too low! Try again.";
    }else if (userGuess > RandomNum){
        ResultMessage.textContent =  "📈 Too high! Try again.";
    }

    // Clear Input place for next Guess...
    userGuessInput.value = "";
}

// Function to Restart Game...
const RestartGame = () => {
    RandomNum = Math.floor(Math.random() * 10) + 1; // this make new random number after reStart
    attemps = 0;   // make attemps 0 after reStart 
    userGuessInput.value = "";   // user input empty 
    userGuessInput.disabled = false ; // userinput enabel after Restart
    GuessButton.disabled = false;     // GuessBtn enabel after Restart.
    ResultMessage.textContent = "";   // Result message also empty after restart...
}


// Add Event Listiner 
GuessButton.addEventListener("click",checkGuess);
RestartButton.addEventListener("click",RestartGame);
