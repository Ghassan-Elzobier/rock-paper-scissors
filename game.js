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

function playRound(humanChoice, computerChoice) {
  let winner = "";
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock!");
    return (winner = "computer");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats Scissors!");
    return (winner = "human");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats Rock!");
    return (winner = "human");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats Paper!");
    return (winner = "computer");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissors!");
    return (winner = "computer");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats paper!");
    return (winner = "human");
  } else {
    console.log("You draw!");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let winner = playRound(humanSelection, computerSelection);
    if (winner == "human") {
      humanScore += 1;
    } else if (winner == "computer") {
      computerScore += 1;
    }
    console.log(
      `Your Score is ${humanScore} and the computer score is ${computerScore}`
    );
  }
}

playGame();
