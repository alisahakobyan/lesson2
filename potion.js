class Weed extends LivingCreature{
 constructor(x,y){
  super(x,y)
}
//    this.x = x;
//    this.y = y;
//    this.directions = []


    getNewCells(){
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


    chooseCell(number){
        this.getNewCells()
        return super.chooseCell(number)
    }
        // let found = [];
        // for(let i in this.directions){
        //     let x = this.directions[i][0]
        //     let y = this.directions[i][1]
        //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
        //     if(matrix[y][x] == number){
        //         found.push(this.directions[i])
        //     }
        // }
        // return found;

    killing(){
    let emptyCells = this.chooseCell(2)
    let newCells = random(emptyCells)
    if(newCells){
        let newY = newCells[1]
        let newX = newCells[0]
         matrix[newY][newX] = matrix[this.y][this.x] 
         this.x = newX
         this.y = newY
         for(let i in grassEaters){
            if( newX == grassEaters[i].x && newY == grassEaters[i].y){
            grassEaters.splice(i,1);
            weeds.splice();
            break;
            }
    
         }
    }

    }
    
    
}
    