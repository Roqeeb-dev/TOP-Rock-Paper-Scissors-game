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

let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let userChoice, compChoice;

userScore.textContent = 0;
computerScore.textContent = 0;
userScore = 0;
computerScore = 0;

let userName = prompt("What is your name?");
document.getElementById("player-name").textContent = userName;

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
    userScore.textContent = userScore;
    scoreHeading.textContent = "Player wins!";
  } else {
    computerScore++;
    computerScore.textContent = computerScore;
    scoreHeading.textContent = "Computer wins!";
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
