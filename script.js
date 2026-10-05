let againBtn = document.querySelector(".again");
let guessNumber = document.querySelector(".guess");
let message = document.querySelector(".message");
// Removed unused guessvalue variable
let checkBtn = document.querySelector(".check");
let gameScore = document.querySelector(".score");
let gameHighScore = document.querySelector(".highscore");
let numberDisplay = document.querySelector(".number"); // Added selector for the '?' box

let score = 20;
let highscore = 0; 
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

// Functionality for check button
checkBtn.addEventListener("click", () => {
    let guess = Number(guessNumber.value);
    
    // 1. Check if input value is empty
    if (!guess) {
        message.textContent = "Enter a number!";
    } else {
        // 3. If random number is equal to input value (Win)
        if (guess === randomNumber) {
            message.textContent = "Correct Number!";
            document.body.style.backgroundColor = "green";
            numberDisplay.textContent = randomNumber; // Reveal the secret number
            
            // Update the high score if the current score is higher
            if (score > highscore) {
                highscore = score;
                gameHighScore.textContent = highscore;
            }
        } else {
            // 4. If random number is not equal to input value
            if (score > 1) {
                message.textContent = guess > randomNumber ? "Too high!" : "Too low!";
                score--;
                gameScore.textContent = score;
            } else {
                // Prevent negative scores after losing
                message.textContent = "You lost the game!";
                score = 0; 
                gameScore.textContent = score;
                document.body.style.backgroundColor = "red";
            }
        }
    }
});

// Functionality for again button
againBtn.addEventListener("click", () => {
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(randomNumber);
    
    // Resetting UI
    message.textContent = "Start guessing...";
    gameScore.textContent = score;
    guessNumber.value = "";
    numberDisplay.textContent = "?"; // Reset the secret number box back to '?'
    document.body.style.backgroundColor = "#222";
});