﻿var rightArrow = false;
var leftArrow = false;
var upArrow = false;
var downArrow = false;
const length = 25;
var piece;
var field = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var stop = false;
var arr = [];
var count = 0;
//run game
window.onload = function () {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    getPiece();
    draw();
    setInterval(function () { update(); }, 1000)
    addEventListener("keydown", onKeyDown);
}
function update() {
    checkStop(piece);
    if (stop) {
        if (checkStop(piece)) {
            count++; changeField(); checkClear(); getPiece(); draw();
        }
    }
    dropPiece(piece);
    draw();
}

function checkPosition(pos) {
    for (var i = 0; i < 4; i++) {
        if (pos.Block[i].y > (19 * length) ||
            pos.Block[i].y < 0 ||
            pos.Block[i].x > (9 * length) ||
            pos.Block[i].x < 0) {
            return false;
        }
        if ((field[((pos.Block[i].y) / 25)][((pos.Block[i].x) / 25)]) > 0) {
            return false;
        }
    }
    return true;
}

function movePiece(direction) {
    var type = piece.constructor;
    var pos = new type;
    switch (direction) {
        case "right":
            for (var i = 0; i < 4; i++) {
                pos.Block[i].x = piece.Block[i].x;
                pos.Block[i].y = piece.Block[i].y;
                pos.Block[i].x += length;
            }
            if (checkPosition(pos)) {
                for (var i = 0; i < 4; i++) {
                    piece.Block[i].x += length;
                }
            }
            break;
        case "left":
            for (var i = 0; i < 4; i++) {
                pos.Block[i].x = piece.Block[i].x;
                pos.Block[i].y = piece.Block[i].y;
                pos.Block[i].x -= length;
            }
            if (checkPosition(pos)) {
                for (var i = 0; i < 4; i++) {
                    piece.Block[i].x -= length;
                }
            }
            break;
        case "down":
            for (var i = 0; i < 4; i++) {
                pos.Block[i].x = piece.Block[i].x;
                pos.Block[i].y = piece.Block[i].y;
                pos.Block[i].y += length;
            }
            if (checkPosition(pos)) {
                for (var i = 0; i < 4; i++) {
                    piece.Block[i].y += length;
                }
            }
            break;
    }
    checkStop(piece);
    draw();
}

function checkStop(piece) {
    for (var i = 0; i < 4; i++) {
        if (piece.Block[i].y >= (500 - length)) {
            stop = true;
            return true;
        }
    }
    for (var i = 0; i < 4; i++) {
        yUnder = ((piece.Block[i].y + 25) / 25)
        xUnder = ((piece.Block[i].x) / 25)
        if (field[yUnder][xUnder] > 0) {
            stop = true;
            return true
        }
    }
    return false;
}

function dropPiece(piece) {
    for (var i = 0; i < 4; i++) {
        piece.Block[i].y += length;
    }
}

function checkClear() {
    var full = true;
    for (var i = 0; i < 20; i++) {
        full = true;
        for (var j = 0; j < 10; j++) {
            if (field[i][j] == 0) {
                full = false;
            }
        }
        if (full) { clearLine(i); }
    }
}

function clearLine(line) {
    for (var t = 0; t < 10; t++) {
        field[line][t] = 0;
    }
    for (var i = line; i > 0; i--) {
        for (var j = 0; j < 10; j++) {
            field[i][j] = field[i - 1][j];
        }
    }
}

function changeField() {
    if (stop) {
        for (var i = 0; i < 4; i++) {
            indexX = (piece.Block[i].x / length);
            indexY = (piece.Block[i].y / length);
            field[indexY][indexX] = piece.index;
        }
    }
}

function draw() {
    drawBoard();
    drawPieces()
}

function drawPieces() {
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 10; j++) {
            c = getColor(field[i][j]);
            drawRectangle(j * length, i * length, length, length, c, 0.5, "grey");
        }
    }
    for (var t = 0; t < 4; t++) {
        drawRectangle(piece.Block[t].x, piece.Block[t].y, length, length, piece.color, 1, "white");
    }
}

function drawBoard() {
    drawRectangle(0, 0, 250, 500, "white", 10, "black");
    for (var i = 1; i < 10; i++) {
        drawLine((length * i), 0, (length * i), (length * 20), 1, "grey");
    }
    for (var i = 1; i < 20; i++) {
        drawLine(0, (length * i), (length * 10), (length * i), 1, "grey");
    }
}

function getPiece() {
    if (count % 7 == 0) {
        arr = getRandom();
    }
    piece = arr[(count % 7)];
    count++;
    stop = false;
}

function getRandom() {
    pieces = [new I, new T, new J, new L, new S, new Z, new O];
    var rnd1;
    var rnd2;
    var temp;
    for (var i = 0; i < 7; i++) {
        rnd1 = getRandomNumber(0, 6);
        rnd2 = getRandomNumber(0, 6);
        temp = pieces[rnd1];
        pieces[rnd1] = pieces[rnd2];
        pieces[rnd2] = temp;
    }
    return pieces;
}

function getColor(num) {
    switch (num) {
        case 0:
            return "white"
        case 1:
            return "cyan"
        case 2:
            return "purple"
        case 3:
            return "blue"
        case 4:
            return "orange"
        case 5:
            return "lime"
        case 6:
            return "red"
        case 7:
            return "yellow"
    }
}


function onKeyDown(event) {
    var keyCode = event.keyCode;
    switch (keyCode) {
        case 39:
            movePiece("right");
            break;
        case 37:
            movePiece("left");
            break;
        case 38:
            upArrow = true;
            break;
        case 40:
            movePiece("down");
            break;
    }
}