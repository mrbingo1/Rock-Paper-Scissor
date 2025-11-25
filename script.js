const buttons = document.querySelector("#buttons");
const p1 = document.querySelector("#p1"); // round result
const p2 = document.querySelector("#p2"); // running score + winner
const result = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;

// Generate a random computer choice each round
function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  if (x === 0) return "Rock";
  if (x === 1) return "Paper";
  return "Scissor";
}

// Play one round
function playRound(humanSelection, computerSelection) {
  if (
    (humanSelection === "Rock" && computerSelection === "Scissor") ||
    (humanSelection === "Paper" && computerSelection === "Rock") ||
    (humanSelection === "Scissor" && computerSelection === "Paper")
  ) {
    humanScore++;
    p1.textContent = `Human Wins: ${humanSelection} beats ${computerSelection}`;
  } else if (humanSelection === computerSelection) {
    p1.textContent = `Draw: ${humanSelection} vs ${computerSelection}`;
  } else {
    computerScore++;
    p1.textContent = `Computer Wins: ${computerSelection} beats ${humanSelection}`;
  }

  // Update running score
  p2.textContent = `Score — Human: ${humanScore}, Computer: ${computerScore}`;

  // Announce winner once someone reaches 5
  if (humanScore === 5) {
    p2.textContent = "Human Wins the Game!";
    disableButtons();
  } else if (computerScore === 5) {
    p2.textContent = "Computer Wins the Game!";
    disableButtons();
  }
}

// Disable buttons once game ends
function disableButtons() {
  Array.from(buttons.children).forEach(btn => btn.disabled = true);
}

// Event listeners for each button
buttons.firstElementChild.addEventListener('click', () => {
  playRound("Paper", getComputerChoice());
});

buttons.children[1].addEventListener('click', () => {
  playRound("Scissor", getComputerChoice());
});

buttons.lastElementChild.addEventListener('click', () => {
  playRound("Rock", getComputerChoice());
});
