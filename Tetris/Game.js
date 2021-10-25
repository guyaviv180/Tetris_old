var rightArrow = false;
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
var arr = [1, 1, 2, 5, 7, 2, 3, 4];
var count = 0;

window.onload = function () {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    getPiece();
    draw();
    setInterval(function () { update(); }, 1000)
    addEventListener("keydown", onKeyDown);
}
function update() {
    dropPiece(piece);
    checkStop(piece);
    draw();
    if (stop) { count++; changeField(); checkClear(); getPiece(); draw();}
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

function checkStop(piece) {
    if (piece.Block[3].y == (500 - length)) {
        stop = true;
    }
    else {
        for (var i = 0; i < 4; i++) {
            yUnder = ((piece.Block[i].y + 25) / 25)
            xUnder = ((piece.Block[i].x) / 25)
            if (field[yUnder][xUnder] >  0) {
                stop = true;
            }
        }
    }
}

function getPiece() {
    piece = getRandom();
    stop = false;
}

function movePiece(direction) {
    var canMove = true
    if (direction == "right") {
        for (var i = 0; i < 4; i++) {
            if (piece.Block[i].x >= (250 - length)) {
                canMove = false
            }
        }
        if (canMove == true) {
            for (var i = 0; i < 4; i++) {
                piece.Block[i].x += length;
            }
        }
    }
    if (direction == "left") {
        for (var i = 0; i < 4; i++) {
            if (piece.Block[i].x < (0 + length)) {
                canMove = false
            }
        }
        if (canMove == true) {
            for (var i = 0; i < 4; i++) {
                piece.Block[i].x -= length;
            }
        }
    }
    if (direction == "down") {
        for (var i = 0; i < 4; i++) {
            if (piece.Block[i].y >= (length * 20)) {
                canMove = false
            }
        }
        if (canMove == true) {
            for (var i = 0; i < 4; i++) {
                piece.Block[i].y += length;
            }
        }
    }
    draw();
}

function dropPiece(piece) {
    for (var i = 0; i < 4; i++) {
        piece.Block[i].y += length;
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
        drawRectangle(piece.Block[t].x, piece.Block[t].y, length, length, piece.color, 1, "black");
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

function getRandom() {
    //getRandomNumber(1, 7)
    switch (arr[count]) {
        case 1:
            return new I;
        case 2:
            return new T;
        case 3:
            return new J;
        case 4:
            return new L;
        case 5:
            return new S;
        case 6:
            return new Z;
        case 7:
            return new O;
    }
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