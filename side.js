class Side{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 50000;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
             [this.x + 1, this.y + 1]
        ];
    }
    }