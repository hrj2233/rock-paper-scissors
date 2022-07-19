let playerScore = 0;
let computerScore = 0;

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
        console.log('비김', `나:${playerSelection} 컴퓨터:${computerSelection}`);
    } else if (playerSelection === '가위' && computerSelection === '보' || playerSelection === '바위' && computerSelection === '가위' || playerSelection === '보' && computerSelection === '바위') {
        console.log('이김', `나:${playerSelection} 컴퓨터:${computerSelection}`);
        playerScore++;
    } else {
        console.log('짐', `나:${playerSelection} 컴퓨터:${computerSelection}`);
        computerScore++;
    }
};

const getResult = () => {
    console.log(playerScore, computerScore);
    if (playerScore === computerScore) {
        console.log('컴퓨터랑 결국 비김');
    } else if (playerScore > computerScore) {
        console.log('내가 결국 이김.');
    } else {
        console.log('컴퓨터가 결국 이김.');
    }
};

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt('가위 바위 보를 선택하세요.');
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
    getResult();
};

game();