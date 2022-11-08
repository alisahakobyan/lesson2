class Monster extends LivingCreature{
constructor(x,y){
    super(x,y)
    this.energy = 5000;
    // this.x = x 
    // this.y = y;
    
    // this.directions = [];
}
getNewCoordinate(){
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
chooseCell(charact){
    this.getNewCoordinate()
    return super.chooseCell(charact)
    // let found = [];
    // for(let i in this.directions){
    //     let x = this.directions[i][0]
    //     let y = this.directions[i][1]
    //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
    //     if(matrix[y][x] == charact){
    //         found.push(this.directions[i])
    //     }
    // }
    // return found;
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

   }

 eatersEat(){
    let emptyCells = this.chooseCell(4);
    let newCell = random(emptyCells);
    if(newCell){
        let newX = newCell[0];
        let newY = newCell[1];
        matrix[newY][newX] = matrix[this.y][this.x];
        matrix[this.y][this.x] = 0;
        this.x = newX;
        this.y = newY;
        for(let i in grassEaters){
           if( newX == grassEaters[i].x && newY == grassEaters[i].y){
            grassEaters[i].energy--;
            console.log(grassEaters[i].energy)
            break;
           }
        }
      
      }else{
        this.move()
      }
}


}
