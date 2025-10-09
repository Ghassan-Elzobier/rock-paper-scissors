humanScore = 0;
playerScore = 0;

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
  let choice = prompt("Enter rock, paper or scissors");
  return choice;
};

console.log(getComputerChoice(), getHumanChoice());
