let game = [0,0,0,0,0,0,0,0,0];
let playerTurn = 'x';
let board = document.getElementsByClassName('board');
let playerBoard = document.getElementById('player-board');
let celebrationText = document.getElementById('celebrationText');
let celebrationBox = document.getElementById('confetti');

let totalMoves = 0;

// initialising
playerBoard.innerText = `Player ${playerTurn} turn`;

const play = (index) => {
    totalMoves++;
    if(checkClicked(index)){
        return;
    }
    updateGame(index);
    updateScreen(index);
    if(checkWin()){
        updateWinScreen();
        return;
    }
    if(totalMoves>=9){
        checkDraw();
        return;
    }
    playerTurn = playerTurn==='x'?'o':'x';
}

const updateScreen = (index) => {
    let currentBox = board[0].childNodes[index+index+1];
    currentBox.innerText = playerTurn;
    playerBoard.innerText = `Player ${playerTurn==='x'?'o':'x'} turn`;
}

const updateGame = (index) => {
    game[index] = playerTurn;
}

const updateWinScreen = () => {
    playerBoard.innerHTML = '<button class="play-again-button" onclick="playAgain()">Play Again</button>'
    board[0].style.display = 'none'
    celebrationBox.style.display = "block"
    celebrationText.innerHTML = `<p style="color:#27ae60;">Player ${playerTurn} wins</p>`
}

const playAgain = () => {
    document.location.reload();
}

const checkWin = () => {
    if ((game[0]===playerTurn&&game[1]===playerTurn&&game[2]===playerTurn)||
        (game[3]===playerTurn&&game[4]===playerTurn&&game[5]===playerTurn)||
        (game[6]===playerTurn&&game[7]===playerTurn&&game[8]===playerTurn)||
        (game[0]===playerTurn&&game[3]===playerTurn&&game[6]===playerTurn)||
        (game[1]===playerTurn&&game[4]===playerTurn&&game[7]===playerTurn)||
        (game[2]===playerTurn&&game[5]===playerTurn&&game[8]===playerTurn)||
        (game[0]===playerTurn&&game[4]===playerTurn&&game[8]===playerTurn)||
        (game[2]===playerTurn&&game[4]===playerTurn&&game[6]===playerTurn)) {
        return true;
    }
    return false;
}
const checkDraw = () => {
    playerBoard.innerHTML = '<button class="play-again-button" onclick="playAgain()">Play Again</button>'
    board[0].style.display = 'none'
    celebrationBox.style.display = "block"
    celebrationText.innerHTML = `<p style="color:#e67e22;">Draw</p>`
}

const checkClicked = (index) => {
    if(game[index]===0){
        return false;
    }
    return true
}