<div align="center">

# âœŠâœŒï¸ðŸ–ï¸ Rock Paper Scissors

**Classic Rock Paper Scissors game vs computer with score tracking, animations & beautiful UI. Built with HTML, CSS & JavaScript.**

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-brightgreen?style=for-the-badge&logo=vercel&logoColor=white)](https://rock-paper-scissors.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## ðŸ“Œ Topics

`html` `css` `javascript` `rock-paper-scissors` `game` `browser-game` `random-logic` `score-tracking` `responsive-design` `front-end` `web-development` `vanilla-js` `css-animations` `fun-project`

---

## ðŸ“– About

The **classic Rock Paper Scissors game** â€” now with a modern web design! Play against the computer, track your score, and enjoy beautiful hand gesture animations.

Features **random AI selection**, **score tracking** (wins/losses/draws), and **visual feedback** for each round.

---

## âœ¨ Features

| Feature | Description |
|---------|-------------|
| ðŸ¤– vs Computer | Random computer selection |
| ðŸ“Š Score Tracking | Win/Loss/Draw counter |
| ðŸŽ¨ Animations | Hand gesture animations |
| ðŸ“± Responsive | Play on any device |
| ðŸŽ¯ Result Display | Who won each round |
| ðŸ’« Visual Feedback | Color-coded outcomes |
| ðŸ”„ Quick Reset | Play again instantly |
| âš¡ Instant Result | Immediate round feedback |

---

## ðŸŽ® Game Rules

| You Choose | Beats | Loses To |
|------------|-------|----------|
| âœŠ Rock | âœŒï¸ Scissors | ðŸ–ï¸ Paper |
| ðŸ–ï¸ Paper | âœŠ Rock | âœŒï¸ Scissors |
| âœŒï¸ Scissors | ðŸ–ï¸ Paper | âœŠ Rock |

---

## ðŸ› ï¸ Tech Stack

```
HTML5 âžœ Game Layout, Choice Buttons
CSS3  âžœ Animations, Card Design, Responsive
JS    âžœ Random Logic, Conditionals, Score State
```

---

## ðŸ§  Game Logic

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

## ðŸš€ Quick Start

```bash
git clone https://github.com/codewithshariqofficial/Rock-Paper-Scissors.git
cd Rock-Paper-Scissors
start index.html
```

---

## ðŸ“‚ Project Structure

```
Rock-Paper-Scissors/
â”œâ”€â”€ index.html        # Game UI
â”œâ”€â”€ js/script.js      # Game logic
â”œâ”€â”€ styles/style.css  # Styling
â””â”€â”€ README.md
```

---

## ðŸ‘¨â€ðŸ’» Author

**Code With Shariq Official**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/codewithshariqofficial)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/codewithshariq1/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/codewithshariq1)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://muhammad-shariq-shahid.vercel.app/)

---
