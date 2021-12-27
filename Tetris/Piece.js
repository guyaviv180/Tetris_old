class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = 25;
    }
}
class Piece {
    constructor(color, index) {
        this.Block = new Block(4)
        this.color = color;
        this.index = index;
    }
    move(direction) {
        switch (direction) {
            case "right":
                for (var i = 0; i < 4; i++) {
                    this.Block[i].x += length;
                }
                return;
            case "left":
                for (var i = 0; i < 4; i++) {
                    this.Block[i].x -= length;
                }
                return;
            case "down":
                for (var i = 0; i < 4; i++) {
                    this.Block[i].y += length;
                }
                return;
        }
    }
    clone(piece) {
        for (var i = 0; i < 4; i++) {
            this.Block[i].x = piece.Block[i].x;
            this.Block[i].y = piece.Block[i].y;
        }
    }
}

class I extends Piece {
    constructor() {
        super("cyan", 1);
        this.Block[0] = new Block(length * 3, length * 0)
        this.Block[1] = new Block(length * 4, length * 0)
        this.Block[2] = new Block(length * 5, length * 0)
        this.Block[3] = new Block(length * 6, length * 0)
    }
}
class T extends Piece {
    constructor() {
        super("purple", 2);
        this.Block[0] = new Block(length * 4, length * 0)
        this.Block[1] = new Block(length * 3, length * 1)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 5, length * 1)
    }
}
class J extends Piece {
    constructor() {
        super("blue", 3);
        this.Block[0] = new Block(length * 3, length * 0)
        this.Block[1] = new Block(length * 3, length * 1)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 5, length * 1)
    }
}
class L extends Piece {
    constructor() {
        super("orange", 4);
        this.Block[0] = new Block(length * 5, length * 0)
        this.Block[1] = new Block(length * 3, length * 1)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 5, length * 1)
    }
}
class S extends Piece {
    constructor() {
        super("lime", 5);
        this.Block[0] = new Block(length * 4, length * 0)
        this.Block[1] = new Block(length * 5, length * 0)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 3, length * 1)
    }
}
class Z extends Piece {
    constructor() {
        super("red", 6);
        this.Block[0] = new Block(length * 3, length * 0)
        this.Block[1] = new Block(length * 4, length * 0)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 5, length * 1)
    }
}
class O extends Piece {
    constructor() {
        super("yellow", 7);
        this.Block[0] = new Block(length * 4, length * 0)
        this.Block[1] = new Block(length * 5, length * 0)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 5, length * 1)
    }
}