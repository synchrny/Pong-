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
let paddlesWidth = 30;
let paddleHeight = 70;

let paddle1 = {
    x : 10,
    y : boardHeight/2,
    width: paddleHeight,
    height: paddleHeight,
    velocityY : 0
}

let paddle2 = {
    x : boardWidth - playerWidth - 10,
    y : boardHeight/2,
    width: paddleHeight,
    height: paddleHeight,
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





