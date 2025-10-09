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

console.log(getComputerChoice());
