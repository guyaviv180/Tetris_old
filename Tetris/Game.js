var rightArrow = false;
var leftArrow = false;
var upArrow = false;
var downArrow = false;
var length = 25;
var arr = [new I, new T];
var current = 0;
var stop = false;

window.onload = function () {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    setInterval(function () {
        draw();
        dropPiece(arr[current]);
    }, 500)
    addEventListener("keydown", onKeyDown);
}

function getPiece(arr) {
    piece = arr[current + 1];
}

function dropPiece(p) {
    if (piece.Block[3].y < (500 - length)) {

    }
    for (var i = 0; i < 4; i++) {
        p.Block[i].y += length;
    }
}

function draw() {
    drawBoard();
    drawPiece()
}

function drawPiece() {
    for (var i = 0; i < 4; i++) {
        drawRectangle(piece.Block[i].x, piece.Block[i].y, length, length, piece.color);
    }
}

function drawBoard() {
    drawRectangle(0, 0, 250, 500, "white", 0, "");
    for (var i = 1; i < 10; i++) {
        drawLine((length * i), 0, (length * i), (length * 20), 1, "grey");
    }
    for (var i = 1; i < 20; i++) {
        drawLine(0, (length * i), (length * 10), (length * i), 1, "grey");
    }
}

function onKeyDown(event) {
    var keyCode = event.keyCode;
    switch (keyCode) {
        case 39:
            rightArrow = true;
            break;
        case 37:
            leftArrow = true;
            break;
        case 38:
            upArrow = true;
            break;
        case 40:
            downArrow = true;
            break;
    }
}