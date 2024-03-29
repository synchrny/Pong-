//board
let board;
let boardWidth = 900;
let boardHeight = 900;
let context;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2D"); //used for drawing on the board
}

//paddles for players
let playerWidth = 30;
let playerHeight = 70;

let player1 = {
    x : 10,
    y : boardHeight/2,
    width: playerHeight,
    height: playerHeight,
    velocityY : 0
}

let player2 = {
    x : boardWidth - playerWidth - 10,
    y : boardHeight/2,
    width: playerHeight,
    height: playerHeight,
    velocityY : 0
}


//ping pong ball
let ballWidth = 20;
let ballHeight = 10;
let ball = {
    x : boardWidth/2,
    y : boardHeight/2,
    width : ballWidth,
    height : ballHeight,
    velocityX : 1,
    velocityY : 2
}

let player1Score = 0;
let player2Score = 0;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //used for drawing on the board

    //draw initial player1
    context.fillStyle="skyblue";
    context.fillRect(player1.x, player1.y, playerWidth, playerHeight );

    requestAnimationFrame(update);
    document.addEventListener("keyup", movePlayer);
}

function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    //player1
    context.fillStyle = "skyblue";
    let nextPlayer1Y = player1.y + player1.velocityY;
    if (!outofBounds(nextPlayer1Y)) {
        player1.y = nextPlayer1Y;
    }

    context.fillRect(player1.x, player1.y, playerWidth, playerHeight);
}








