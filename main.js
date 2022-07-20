const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const winner = document.querySelector('.winner');
const progress = document.querySelector('.progress');

let playerScore = 0;
let computerScore = 0;
let playerChoice = '';

buttons.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = e.target.textContent;
    game(playerChoice);

}));



const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    let result;
    switch (choice) {
        case 0:
            result = '가위';
            break;
        case 1:
            result = '바위';
            break;
        case 2:
            result = '보';
            break;
        default:
            console.log('가위 바위 보가 생성 안됨.');
    }
    return result;
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        progress.textContent = `비김 나:${playerSelection} 컴퓨터:${computerSelection}`;
        result.innerHTML = `나: ${playerScore} 컴퓨터: ${computerScore}`;
    } else if (playerSelection === '가위' && computerSelection === '보' || playerSelection === '바위' && computerSelection === '가위' || playerSelection === '보' && computerSelection === '바위') {
        progress.textContent = `이김 나:${playerSelection} 컴퓨터:${computerSelection}`;
        playerScore++;
        result.innerHTML = `나: ${playerScore} 컴퓨터: ${computerScore}`;
    } else {
        progress.textContent = `짐 나:${playerSelection} 컴퓨터:${computerSelection}`;
        computerScore++;
        result.innerHTML = `나: ${playerScore} 컴퓨터: ${computerScore}`;
    }
};

const getResult = () => {
    console.log(playerScore, computerScore);
    if (playerScore === computerScore) {
        winner.textContent = '컴퓨터랑 결국 비김';
    } else if (playerScore > computerScore) {
        winner.textContent = '내가 결국 이김.';
    } else {
        winner.textContent = '컴퓨터가 결국 이김.';
    }
};

const reset = () => {
    playerScore = 0;
    computerScore = 0;
};

const game = (playerChoice) => {
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    if (playerScore === 5 || computerScore === 5) {
        getResult();
        reset();
    }
};