function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"];
    const rpsNum = Math.floor(Math.random() * 3);
    return rps[rpsNum];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (player === computerSelection) {
        console.log("it's tie");
        return "it's tie";
    } else if (player === "Rock" && computerSelection === "Paper" || player === "Paper" && computerSelection === "Scissors" || player === "Scissors" && computerSelection === "rock") {
        computerScore++;
        console.log(`You Lose! ${computerSelection} beats ${player}`);
        return `You Lose! ${computerSelection} beats ${player}`;
    } else {
        playerScore++;
        console.log(`You Win! ${player} beats ${computerSelection}`);
        return `You Win! ${player} beats ${computerSelection}`;
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock Paper Scissors?");
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore === computerScore) {
        console.log("Result: it's tie");
    } else if (playerScore > computerScore) {
        console.log(`Result: You Win! You:${playerScore} Computer:${computerScore}`);
    } else {
        console.log(`Result: You Lose! Computer:${computerScore} You:${playerScore} `);
    }
}

game();