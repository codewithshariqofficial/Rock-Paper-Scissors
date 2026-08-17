<div align="center">

# Rock Paper Scissors

**Classic Rock Paper Scissors game vs computer with score tracking, animations and beautiful UI. Built with HTML, CSS and JavaScript.**

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-brightgreen?style=for-the-badge&logo=vercel&logoColor=white)](https://rock-paper-scissors-five-inky.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## Live Demo

**https://rock-paper-scissors-five-inky.vercel.app**

---

## Topics

`html` `css` `javascript` `rock-paper-scissors` `game` `browser-game` `random-logic` `score-tracking` `responsive-design` `vanilla-js`

---

## About

The **classic Rock Paper Scissors game** -- now with a modern web design! Play against the computer, track your score, and enjoy beautiful hand gesture animations.

Features **random AI selection**, **score tracking** (wins/losses/draws), and **visual feedback** for each round.

---

## Features

| Feature | Description |
|---------|-------------|
| vs Computer | Random computer selection |
| Score Tracking | Win/Loss/Draw counter |
| Animations | Hand gesture animations |
| Responsive | Play on any device |
| Result Display | Who won each round |
| Visual Feedback | Color-coded outcomes |
| Quick Reset | Play again instantly |
| Instant Result | Immediate round feedback |

---

## Game Rules

| You Choose | Beats | Loses To |
|------------|-------|----------|
| Rock | Scissors | Paper |
| Paper | Rock | Scissors |
| Scissors | Paper | Rock |

---

## Tech Stack

```
HTML5  -->  Game Layout, Choice Buttons
CSS3   -->  Animations, Card Design, Responsive
JS     -->  Random Logic, Conditionals, Score State
```

---

## Game Logic

```javascript
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(player, computer) {
    if (player === computer) return "draw";
    if ((player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper"))
        return "player";
    return "computer";
}
```

---

## Quick Start

```bash
git clone https://github.com/codewithshariqofficial/Rock-Paper-Scissors.git
cd Rock-Paper-Scissors
start index.html
```

---

## Project Structure

```
Rock-Paper-Scissors/
  |-- index.html
  |-- js/
  |     |-- script.js
  |-- styles/
  |     |-- style.css
  |-- README.md
```

---

## Author

**Code With Shariq Official**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/codewithshariqofficial)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/codewithshariq1/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/codewithshariq1)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://muhammad-shariq-shahid.vercel.app/)
