let gameRestarter = document.getElementById("game-rules");
let gameManual = document.getElementById("game-manual");
let gameRules = document.getElementById("game-rules");

let userRock = document.getElementById("user-rock");
let userPaper = document.getElementById("user-paper");
let userScissors = document.getElementById("user-scissors");

let computerRock = document.getElementById("computer-rock");
let computerPaper = document.getElementById("computer-paper");
let computerScissors = document.getElementById("computer-scissors");

let scoreHeading = document.querySelector(".score-board h1");

let userScoreContent = document.getElementById("user-score-content");
let computerScoreContent = document.getElementById("computer-score-content");
let userChoice, compChoice, message;
let isGameComplete = false;

let userScore = 0;
let computerScore = 0;
userScoreContent.textContent = 0;
computerScoreContent.textContent = 0;

function getComputerChoice() {
  const computerChoiceArray = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * computerChoiceArray.length);
  return computerChoiceArray[computerChoice];
}

function compareChoices() {
  compChoice = getComputerChoice();
  if (userChoice === compChoice) {
    scoreHeading.textContent = "There is a tie !";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    userScore++;
    userScoreContent.textContent = userScore;
    scoreHeading.textContent = "Player wins!";
  } else {
    computerScore++;
    computerScoreContent.textContent = computerScore;
    scoreHeading.textContent = "Computer wins!";
  }
}

function checkWhoWon(userScore, computerScore) {
  if (userScore > computerScore) {
    message = "Player won the game";
    alert(message);
  } else {
    message = "Computer won the game";
    alert(message);
  }
}

function isGameOver(userScore, computerScore) {
  if (userScore >= 5 || computerScore >= 5) {
    alert("Game over!");
    checkWhoWon(userScore, computerScore);
  }
}

userRock.addEventListener("click", () => {
  userChoice = "rock";
  compareChoices();
});
userPaper.addEventListener("click", () => {
  userChoice = "paper";
  compareChoices();
});
userScissors.addEventListener("click", () => {
  userChoice = "scissors";
  compareChoices();
});
