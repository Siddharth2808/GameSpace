let originalBoard;

let humanPlayer = 'O';
let aiPlayer = 'X';
//hard code all winning combinations
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

//cells variable will now contain a reference to every element with a class="cell"
const cells = document.querySelectorAll('.cell');
//Start game function call
startGame();

function startGame() {
    //sets the endgame display style to none
    // document.querySelector(".endgame").style.display = "none";
    //sets the originalBoard to have key values from 0-8
    originalBoard = Array.from(Array(9).keys());
    //iterate over all cells 
    for (let iter = 0; iter < cells.length; iter++) {
        cells[iter].innerText = '';
        cells[iter].style.removeProperty('background-color');
        cells[iter].addEventListener('click', turnClick, false);
    }
    turn(Math.floor(Math.random() * 9), aiPlayer);
}

function turnClick(square) {
    if (typeof originalBoard[square.target.id] == 'number') {
        turn(square.target.id, humanPlayer);
        if (!checkWin(originalBoard, humanPlayer) && !checkTie()) {turn(bestSpot(), aiPlayer);checkTie();}
    }
}

function turn(squareId, player) {
    originalBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(originalBoard, player);
    if (gameWon) gameOver(gameWon);
}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = { index: index, player: player };
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player == humanPlayer ? "blue" : "red";
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
}


function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player == humanPlayer ? "blue" : "red";
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player == humanPlayer ? "You win!" : "You lose.");
}

function declareWinner(who) {
    // document.querySelector(".endgame").style.display = "block";
    // document.querySelector(".endgame .text").innerText = who;
    document.getElementById("result").innerText = who;
    document.getElementById("result-button").click(); 
}

function emptySquares() {
    return originalBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    //for easy mode
    //return emptySquares()[0];
    //for hard mode
    return minimax(originalBoard, aiPlayer).index;

}

function bestSpotop() {
    return emptySquares()[0];

}

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "green";
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game!")
        return true;
    }
    return false;
}

function minimax(newBoard, player) {
    var availSpots = emptySquares();

    if (checkWin(newBoard, humanPlayer)) {
        return { score: -10 };
    }
    else if (checkWin(newBoard, aiPlayer)) {
        return { score: 10 };
    }
    else if (availSpots.length === 0) {
        return { score: 0 };
    }
    var moves = [];
    for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player == aiPlayer) {
            var result = minimax(newBoard, humanPlayer);
            move.score = result.score;
        }
        else {
            var result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index;

        moves.push(move);
    }

    var bestMove;
    if (player === aiPlayer) {
        var bestScore = -10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    else {
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}




