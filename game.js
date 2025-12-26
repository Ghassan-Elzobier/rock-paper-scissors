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

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  let winner = "";
  if (humanChoice == "rock" && computerChoice == "paper") {
    results.textContent = "You lose! Paper beats Rock!";
    return (winner = "computer");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    results.textContent = "You win! Rock beats Scissors!";
    return (winner = "human");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    results.textContent = "You win! Paper beats Rock!";
    return (winner = "human");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    results.textContent = "You lose! Scissors beats Paper!";
    return (winner = "computer");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    results.textContent = "You lose! Rock beats Scissors!";
    return (winner = "computer");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    results.textContent = "You win! Scissors beats paper!";
    return (winner = "human");
  } else {
    results.textContent = "You draw!";
    return (winner = "draw");
  }
}

function calculateScore(humanScore, computerScore, winner) {
  if (winner == "human") {
    humanScore += 1;
  }
  if (winner == "computer") {
    computerScore += 1;
  }
  score.textContent = `Your Score: ${humanScore}    Computer Score: ${computerScore}`;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // buttons.addEventListener("click", (event) =>{
  //   let target = event.target

  // })

  rockButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    winner = playRound("rock", computerChoice);
    calculateScore(humanScore, computerScore, winner);
  });
  paperButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    winner = playRound("paper", computerChoice);
    calculateScore(humanScore, computerScore, winner);
  });
  scissorsButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    winner = playRound("scissors", computerChoice);
    calculateScore(humanScore, computerScore, winner);
  });
}

playGame();
