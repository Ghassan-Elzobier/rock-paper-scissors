const buttons = document.querySelector("#buttons");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");
const score = document.querySelector("#score");

const getComputerChoice = () => {
  // Get a random choice of 0, 1, or 2
  let randomChoice = Math.floor(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const getHumanChoice = () => {
  // Get choice from user
  let choice = prompt("Enter rock, paper or scissors").toLowerCase();
  return choice;
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    results.textContent = "You lose! Paper beats Rock!";
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    results.textContent = "You win! Rock beats Scissors!";
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    results.textContent = "You win! Paper beats Rock!";
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    results.textContent = "You lose! Scissors beats Paper!";
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    results.textContent = "You lose! Rock beats Scissors!";
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    results.textContent = "You win! Scissors beats paper!";
    humanScore++;
  } else {
    results.textContent = "You draw!";
  }
}

function playGame() {
  buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
      case "rock":
        playRound("rock", getComputerChoice());
        break;
      case "paper":
        playRound("paper", getComputerChoice());
        break;
      case "scissors":
        playRound("scissors", getComputerChoice());
        break;
    }

    if (humanScore == 5) {
      score.textContent = "Congrats you were the first to five!";
      humanScore = 0;
      computerScore = 0;
    } else if (computerScore == 5) {
      score.textContent = "The computer was first to five, try again!";
      humanScore = 0;
      computerScore = 0;
    } else {
      score.textContent = `Your Score: ${humanScore}    Computer Score: ${computerScore}`;
    }
  });
}

playGame();
