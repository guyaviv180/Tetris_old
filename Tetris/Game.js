var rightArrow = false;
var leftArrow = false;
var upArrow = false;
var downArrow = false;
var length = 25;
var arr = [new I, new T, new J, new L, new S, new Z, new O];
var current = 0;
var piece = arr[current];
var stop = false;

window.onload = function () {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    setInterval(function () {
        draw();
        dropPiece(piece);
        checkStop(piece);
        if (stop == true) {
            getPiece();
        }
    }, 500)
    addEventListener("keydown", onKeyDown);
}

function getPiece() {
    current += 1;
    piece = arr[current];
    stop = false;
}

function dropPiece(piece) {
    for (var i = 0; i < 4; i++) {
        piece.Block[i].y += length;
    }
}
function checkStop(piece) {
    if (piece.Block[3].y == (500 - length)) {
        stop = true;
    }
    for (var i = 0; i < current; i++) {
        if (piece.isTouching(arr[i])) {
            stop = true;
        }
    }
}
function draw() {
    drawBoard();
    drawPieces()
}

function drawPieces() {
    for (var i = 0; i < (current + 1); i++) {
        for (var j = 0; j < 4; j++) {
            drawRectangle(arr[i].Block[j].x, arr[i].Block[j].y, length, length, arr[i].color);
        }
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