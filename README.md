# Guess My Number! 🎮

A fun, interactive browser-based game where the player must guess a hidden secret number between 1 and 20. Built using HTML, CSS, and vanilla JavaScript, this project demonstrates DOM manipulation, event handling, and game logic in a simple and engaging way.

## 🔗 Live Demo

Play the game here: https://aditri-gaur.github.io/guess-game-web/

## ✨ Features

- Dynamic feedback: the game tells you if your guess is "Too high!" or "Too low!"
- Score tracking: you start with a score of 20, which decreases by 1 for every incorrect guess
- High score: the game remembers your highest score across multiple rounds during your session
- Visual cues: the background turns green when you guess correctly and red if your score drops to 0 (Game Over)
- Reset functionality: the "Again!" button lets you restart the game, generate a new secret number, and reset your current score without losing your high score

## 🛠️ Technologies Used

- HTML5: page structure and semantic elements
- CSS3: styling, layout, and typography
- JavaScript (ES6): game logic, score calculations, and DOM updates

## 📖 How to Play

1. Enter a number between 1 and 20 into the input box.
2. Click the Check! button to submit your guess.
3. Read the message to determine whether to guess higher or lower.
4. Try to guess the correct number before your score reaches 0.
5. Once you win or lose, click the Again! button to play another round.

## 💻 Local Installation

If you want to run this project locally:

```bash
git clone https://github.com/aditri-gaur/guess-game-web.git
cd guess-game-web
```

Then open `index.html` in your browser to play.

## 📁 Project Structure

- `index.html` — game layout
- `style.css` — styling and design
- `script.js` — game logic and interactions

## 🧩 Goal

The objective is to guess the hidden number before the score reaches zero. The game provides immediate feedback and keeps track of the best score for the current session.
