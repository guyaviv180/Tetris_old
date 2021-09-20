class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = 25;
    }
}
class Piece {
    constructor(color) {
        this.Block = new Block(4)
        this.color = color;
    }

    isTouching(piece) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.Block[i].y + length == piece.Block[j].y && this.Block[i].x == piece.Block[j].x) {
                    return true
                }
            }
        }
    }
}

class I extends Piece {
    constructor() {
        super("cyan");
        this.Block[0] = new Block(length * 3, length * 0)
        this.Block[1] = new Block(length * 4, length * 0)
        this.Block[2] = new Block(length * 5, length * 0)
        this.Block[3] = new Block(length * 6, length * 0)
    }
}
class T extends Piece {
    constructor() {
        super("purple");
        this.Block[0] = new Block(length * 4, length * 0)
        this.Block[1] = new Block(length * 3, length * 1)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 5, length * 1)
    }
}
class J extends Piece {
    constructor() {
        super("blue");
        this.Block[0] = new Block(length * 3, length * 0)
        this.Block[1] = new Block(length * 3, length * 1)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 5, length * 1)
    }
}
class L extends Piece {
    constructor() {
        super("orange");
        this.Block[0] = new Block(length * 5, length * 0)
        this.Block[1] = new Block(length * 3, length * 1)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 5, length * 1)
    }
}
class S extends Piece {
    constructor() {
        super("lime");
        this.Block[0] = new Block(length * 4, length * 0)
        this.Block[1] = new Block(length * 5, length * 0)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 3, length * 1)
    }
}
class Z extends Piece {
    constructor() {
        super("red");
        this.Block[0] = new Block(length * 3, length * 0)
        this.Block[1] = new Block(length * 4, length * 0)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 5, length * 1)
    }
}
class O extends Piece {
    constructor() {
        super("yellow");
        this.Block[0] = new Block(length * 4, length * 0)
        this.Block[1] = new Block(length * 5, length * 0)
        this.Block[2] = new Block(length * 4, length * 1)
        this.Block[3] = new Block(length * 5, length * 1)
    }
}