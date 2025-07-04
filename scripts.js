function getComputerChoice() {
  const computerChoiceArray = ["rock", "paper", "scissors"];
  let randomi = Math.floor(Math.random() * computerChoiceArray.length);
  return computerChoiceArray[randomi];
}

function getHumanChoice() {
  return prompt("Choose between rock, paper, and scissors");
}

// Declare the scores of each of the participants: player and computer
let humanScore = 0;
let computerScore = 0;
let isGameComplete = false; // Declare globally

// The main logic for each round of the game
function playRound() {
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    console.log(
      `There is a tie! ${humanChoice} is the same as ${computerChoice}`
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  if (humanScore >= 5 || computerScore >= 5) {
    isGameComplete = true;
  } else {
    isGameComplete = false;
  }
}

// The logic for playing the game until completion
function playGame() {
  while (!isGameComplete) {
    playRound();
  }

  // Display the final results
  console.log("Game is finished!.");
  if (humanScore === 5) {
    console.log(
      `You won the game by a margin of ${humanScore} to ${computerScore}`
    );
  } else {
    console.log(
      `You lost the game by a margin of ${computerScore} to ${humanScore}`
    );
  }
}

playGame();
