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
    checkStop()
    if (stop) {
        getPiece();
        changeField();
    }
    piece.move("down");
    draw();
}

function getPiece() {
    piece = new I;
}

function changeField() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            field[i + piece.y][j + piece.x] = piece.index;
        }
    }
}

function checkStop() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (piece.getPiece()) {

            }
        }
    }
}

function draw() {
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 10; j++) {
            c = getColor(field[i][j]);
            drawRectangle(j * length, i * length, length, length, c, 0.5, "grey");
        }
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (piece.state[i][j] > 0) {
                drawRectangle(piece.x + (j * length),piece.y + (i * length), length, length, piece.color, 0.5, "grey")
            }
        }
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
            piece.move("right")
            break;
        case 37:
            piece.move("left")
            break;
        case 38:
            upArrow = true;
            break;
        case 40:
            piece.move("down")
            break;
    }
}