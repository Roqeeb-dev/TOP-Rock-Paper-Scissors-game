let gameRestarter = document.getElementById("game-rules");
let gameManual = document.getElementById("game-manual");
let gameRules = document.getElementById("game-rules");

let userRock = document.getElementById("user-rock");
let userPaper = document.getElementById("user-paper");
let userScissors = document.getElementById("user-scissors");

let computerRock = document.getElementById("computer-rock");
let computerPaper = document.getElementById("computer-paper");
let computerScissors = document.getElementById("computer-scissors");

let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");

userScore.textContent = 0;
computerScore.textContent = 0;
userScore = 0;
computerScore = 0;

function getComputerChoice() {
  const computerChoiceArray = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * computerChoiceArray.length);
  return computerChoiceArray[computerChoice];
}
