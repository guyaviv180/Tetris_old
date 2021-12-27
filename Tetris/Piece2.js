const length = 25;
class Piece {
    constructor(color, index) {
        this.x = 3 * length;
        this.y = 0 * length;
        this.color = color;
        this.index = index;
        this.stop = false;
        this.state1 = []
        this.state2 = []
        this.state3 = []
        this.state4 = []
        this.state = this.state1;
    }
    move(direction) {
        switch (direction) {
            case "right":
                this.x += length;
                return;
            case "left":
                this.x -= length;
                return;
            case "down":
                this.y += length;
                return;
        }
    }
    getPlace() {
        arr = new arr(4);
        for (var i = 0; i < 4; i++) {
            arr[i] = 
        }
    }
}

class I extends Piece {
    constructor() {
        super("cyan", 1);
        this.state1 = [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        this.state2 = [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ]
        this.state3 = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ]
        this.state4 = [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ]
        this.state = this.state1;
    }
}
class T extends Piece {
    constructor() {
        super("purple", 2);
        this.state1 = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
        this.state2 = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
        this.state3 = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
        this.state4 = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
        this.state = this.state1;
    }
}
class J extends Piece {
    constructor() {
        super("blue", 3);
        this.state1 = [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
        this.state2 = [
            [0, 1, 1],
            [0, 1, 0],
            [0, 1, 0]
        ]
        this.state3 = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
        this.state4 = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
        this.state = this.state1;
    }
}
//class L extends Piece {
//    constructor() {
//        super("orange", 4);
//        this.Block[0] = new Block(length * 5, length * 0)
//        this.Block[1] = new Block(length * 3, length * 1)
//        this.Block[2] = new Block(length * 4, length * 1)
//        this.Block[3] = new Block(length * 5, length * 1)
//    }
//}
class S extends Piece {
    constructor() {
        super("lime", 5);
        this.state1 = [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ]
        this.state2 = [
            [0, 1, 0],
            [0, 1, 1],
            [0, 0, 1]
        ]
        this.state3 = [
            [0, 0, 0],
            [0, 1, 1],
            [1, 1, 0]
        ]
        this.state4 = [
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 0]
        ]
        this.state = this.state1;
    }
}
//class Z extends Piece {
//    constructor() {
//        super("red", 6);
//        this.Block[0] = new Block(length * 3, length * 0)
//        this.Block[1] = new Block(length * 4, length * 0)
//        this.Block[2] = new Block(length * 4, length * 1)
//        this.Block[3] = new Block(length * 5, length * 1)
//    }
//}
//class O extends Piece {
//    constructor() {
//        super("yellow", 7);
//        this.Block[0] = new Block(length * 4, length * 0)
//        this.Block[1] = new Block(length * 5, length * 0)
//        this.Block[2] = new Block(length * 4, length * 1)
//        this.Block[3] = new Block(length * 5, length * 1)
//    }
//}