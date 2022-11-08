class GrassEater extends LivingCreature {
    constructor(x,y){
    super(x,y)
    this.energy = 8;
    }
        // this.x = x;
        // this.y = y;
        // this.directions = [];


    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }


chooseCell(character){
    this.getNewCoordinates()
    return super.chooseCell(character)
}
    // let found = [];
    // for(let i in this.directions){
    //     let x = this.directions[i][0]
    //     let y = this.directions[i][1]
    //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
    //     if(matrix[y][x] == character){
    //         found.push(this.directions[i])
    //     }
    // }
    // return found;

   mull(){
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

    if(newCell){
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 2;

        var newGrassEater = new GrassEater(newX, newY);
        grassEaters.push(newGrassEater);
        this.energy = 8;
   }
}


move(){
    this.energy--;
    let emptyCells = this.chooseCell(0);
    let newCell = random(emptyCells);
    if(newCell && this.energy >= 0){
        let newX = newCell[0];
        let newY = newCell[1];
        matrix[newY][newX] = matrix[this.y][this.x];
        matrix[this.y][this.x] = 0;
        this.x = newX
        this.y = newY
    } 
   else {
    this.die()
   }
}

eat(){
    let emptyCells = this.chooseCell(1);
    let newCell = random(emptyCells);
    if(newCell){
        this.energy++;
        let newX = newCell[0];
        let newY = newCell[1];
        matrix[newY][newX] = matrix[this.y][this.x];
        matrix[this.y][this.x] = 0;
        this.x = newX;
        this.y = newY;
        if(this.energy > 15){
            this.mull();
        }
        for(let i in grasses){
           if( newX == grasses[i].x && newY == grasses[i].y){
            grasses.splice(i,1);
            break;
           }
        }
      
      }else{
        this.move()
      }
}




die() {
    matrix[this.y][this.x] = 0;
    for (var i in grassEaters) {
        if (this.x == grassEaters[i].x && this.y == grassEaters[i].y) {
            grassEaters.splice(i, 1);
            break;
        }
    }
}

}

