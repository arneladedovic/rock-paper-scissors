// Base
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;
}

// Function to play game 
const playGame = () => {
  const rockButton = document.querySelector('.rock');
  const paperButton = document.querySelector('.paper');
  const scissorButton = document.querySelector('.scissor');
  const playerOptions = [rockButton, paperButton, scissorButton];
  const computerOptions = ['rock', 'paper', 'scissor'];
}

// Function to start play
  playerOptions.forEach(option => {
    option.addEventListener('click', function() {

    const movesLeft = document.querySelector('.movesLeft'); moves++;
    movesLeft.innerText = `Moves Left: ${10-moves}`;
    })

      const choiceNumber = Math.floor(Math.random()*3);
      const computerChoice = computerOptions[choiceNumber];
  });

  // Function to see who wins

  // Function to end game efter 10moves

  // Function to decide winner

  // Function to run when game over


