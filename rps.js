let userRock = document.getElementById("user-rock");
let userPaper = document.getElementById("user-paper");
let userScissors = document.getElementById("user-scissors");

let computerRock = document.getElementById("computer-rock");
let computerPaper = document.getElementById("computer-paper");
let computerScissors = document.getElementById("computer-scissors");

let scoreHeading = document.querySelector(".score-board h1");
let mobileScoreHeading = document.querySelector(".mobile-scoreboard-h1");
let userScoreContent = document.getElementById("user-score-content");
let computerScoreContent = document.getElementById("computer-score-content");
let userChoice, compChoice;

let dialog = document.querySelector("dialog");
let dialogText = document.querySelector("dialog p");
let dialogButton = document.querySelector("dialog button");

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
    mobileScoreHeading.textContent = "There is a tie !";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    userScore++;
    userScoreContent.textContent = userScore;
    scoreHeading.textContent = "Player wins!";
    mobileScoreHeading.textContent = "Player wins!";
  } else {
    computerScore++;
    computerScoreContent.textContent = computerScore;
    scoreHeading.textContent = "Computer wins!";
    mobileScoreHeading.textContent = "Computer wins!";
  }
}

function checkWhoWon(userScore, computerScore) {
  dialog.showModal();
  if (userScore > computerScore) {
    dialogText.innerHTML = `Player won the game by a margin of <strong>${userScore}</strong> to <strong>${computerScore}</strong>`;
  } else {
    dialogText.innerHTML = `Computer won the game by a margin of <strong>${computerScore}</strong> to <strong>${userScore}</strong>`;
  }
}

function isGameOver(userScore, computerScore) {
  if (userScore >= 5 || computerScore >= 5) {
    scoreHeading.textContent = "GAME OVER!";
    mobileScoreHeading.textContent = "GAME OVER!";
    checkWhoWon(userScore, computerScore);
  }
}

function showWhichButtonPlayerClicked() {
  document.getElementById(`user-${userChoice}`).classList.add("bigger");
  setTimeout(() => {
    document.getElementById(`user-${userChoice}`).classList.remove("bigger");
  }, 300);
}

userRock.addEventListener("click", () => {
  userChoice = "rock";
  showWhichButtonPlayerClicked();
  compareChoices();
  isGameOver(userScore, computerScore);
});
userPaper.addEventListener("click", () => {
  userChoice = "paper";
  showWhichButtonPlayerClicked();
  compareChoices();
  isGameOver(userScore, computerScore);
});
userScissors.addEventListener("click", () => {
  userChoice = "scissors";
  showWhichButtonPlayerClicked();
  compareChoices();
  isGameOver(userScore, computerScore);
});

// Making it keyboard accessible
document.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "r":
      userChoice = "rock";
      showWhichButtonPlayerClicked();
      compareChoices();
      isGameOver(userScore, computerScore);
      break;
    case "p":
      userChoice = "paper";
      showWhichButtonPlayerClicked();
      compareChoices();
      isGameOver(userScore, computerScore);
      break;
    case "s":
      userChoice = "scissors";
      showWhichButtonPlayerClicked();
      compareChoices();
      isGameOver(userScore, computerScore);
      break;
    case "n":
      userScore = 0;
      userScoreContent.textContent = userScore;
      computerScore = 0;
      computerScoreContent.textContent = computerScore;
      break;
    default:
      break;
  }
});

dialogButton.addEventListener("click", () => {
  dialog.close();
  userScore = 0;
  userScoreContent.textContent = userScore;
  computerScore = 0;
  computerScoreContent.textContent = computerScore;
});
