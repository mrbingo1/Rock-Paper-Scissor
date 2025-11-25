humanScore = 0;
computerScore = 0;
draw = 0;

function getHumanChoice() {
    return prompt("Which one do you Pick? Rock, Paper, or Scissor? ");
}


function getComputerChoice() {

    let x;

    x = Math.floor(Math.random() * 3);

    if (x === 0) {
        return "Rock";
    } else if (x === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }

}

// humanSelection = getHumanChoice();
// computerSelection = getComputerChoice();



// console.log(humanSelection + " " + computerSelection)

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        ++draw;
    // console.log("Draw");
    } else if (
        (humanSelection === "Rock" && computerSelection === "Scissor") ||
        (humanSelection === "Paper" && computerSelection === "Rock") ||
        (humanSelection === "Scissor" && computerSelection === "Paper")
    ) {
        // console.log("human Wins");
        ++humanScore;
    } else if (
        (computerSelection === "Rock" && humanSelection === "Scissor") ||
        (computerSelection === "Paper" && humanSelection === "Rock") ||
        (computerSelection === "Scissor" && humanSelection === "Paper")
    ) {
        // console.log("Computer Wins");
        ++computerScore;
    } else {
        console.log("Invalid input");
    }
}





function playGame() {
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());

    if (humanScore > computerScore) {
        console.log("Human Winds");
    } else if (humanScore < computerScore) {
        console.log("Computer Wins");
    } else {
        console.log("Draw");
    }

    console.log(`Human Score: ${humanScore}
        Computer Score: ${computerScore}
        Draw: ${draw}`);
}

playGame();




