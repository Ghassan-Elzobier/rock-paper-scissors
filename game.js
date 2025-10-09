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
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock!");
    computerScore += 1;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats Scissors!");
    humanScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats Rock!");
    humanScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats Paper!");
    computerScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissors!");
    computerScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats paper!");
    humanScore += 1;
  } else {
    console.log("You draw!");
  }
}

function playGame() {
  const humanScore = 0;
  const computerScore = 0;
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  for (let i = 0; i < 5; i++) {
    playRound(humanSelection, computerSelection);
    console.log(
      `Your Score is ${humanScore} and the computer score is ${computerScore}`
    );
  }
}
