class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = 25;
        this.space = length * 3;
    }
}
class Piece {
    constructor(color, index) {
        this.Block = new Block(4)
        this.state1 = []
        this.state2 = []
        this.state3 = []
        this.state4 = []
        this.color = color;
        this.index = index;
        this.state = this.state1;
    }
    build() {
        var count = 0;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.state[i][j] == 1) {
                    this.Block[count].y = i * length;
                    this.Block[count].x = j * length;
                    count++;
                }
            }
        }
        switch (state) {
            case this.state1:
                this.state = this.state2;
                return;
        }
    }
}

class I extends Piece {
    constructor() {
        super("cyan", 1);
        this.Block[0] = new Block;
        this.Block[1] = new Block;
        this.Block[2] = new Block;
        this.Block[3] = new Block;
        this.state1 = [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        this.state2 = [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ]
        this.state3 = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ]
        this.state4 = [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ]
        this.build(this.state1);
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