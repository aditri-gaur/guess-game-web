# Guess My Number! 🎮

A fun, interactive browser-based game where the player must guess a hidden secret number between 1 and 20. Built using HTML, CSS, and vanilla JavaScript, this project demonstrates DOM manipulation, event handling, and basic game logic.

## 🔗 Live Demo
**Play the game here:** [https://aditri-gaur.github.io/\<your-repository-name\>](https://aditri-gaur.github.io/) 
*(Note: Replace `<your-repository-name>` with the actual name of your repository in the URL).*

## ✨ Features
* **Dynamic Feedback:** The game tells you if your guess is "Too high!" or "Too low!".
* **Score Tracking:** You start with a score of 20, which decreases by 1 for every incorrect guess.
* **High Score:** The game remembers your highest score across multiple rounds during your session.
* **Visual Cues:** The background turns green when you guess correctly and red if your score drops to 0 (Game Over).
* **Reset Functionality:** An "Again!" button lets you restart the game, generate a new secret number, and reset your current score without losing your Highscore.

## 🛠️ Technologies Used
* **HTML5:** Page structure and semantic tags.
* **CSS3:** Custom styling, flexbox layout, and the retro "Press Start 2P" Google Font.
* **JavaScript (ES6):** Game logic, score calculations, and DOM manipulation.

## 📖 How to Play
1. Enter a number between 1 and 20 into the input box on the left side of the screen.
2. Click the **Check!** button to submit your guess.
3. Watch the message on the right to see if you need to guess higher or lower.
4. Try to guess the correct number before your score reaches 0!
5. Once you win (or lose), click the **Again!** button at the top left to play another round.

## 💻 Local Installation
If you want to run this project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/aditri-gaur/<your-repository-name>.git
   ```
2. Navigate into the project directory:
   ```bash
   cd <your-repository-name>
   ```
3. Open `index.html` in any modern web browser to play the game. No local server is required.