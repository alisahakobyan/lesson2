// let matrix = [
//     // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
//     // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
//     // [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
//     // [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
//     // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],


// ]
var matrix = [];
let side = 120;
let grasses = [];
let grassEaters = [];
let weeds = [];
let predators = [];
let monsters = [];

function setup(){
  function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount,weedCount,monsterCount) {
    for (let i = 0; i < matrixSize; i++) {
    matrix[i] = []
    for (let o = 0; o < matrixSize; o++) {
    matrix[i][o] = 0;
    }
    }
    for (let i = 0; i < grassCount; i++) {
    let x = Math.floor(random(matrixSize));
    let y = Math.floor(random(matrixSize));
    matrix[y][x] = 1;
    }
    for (let i = 0; i < grassEaterCount; i++) {
    let x = Math.floor(random(matrixSize));
    let y = Math.floor(random(matrixSize));
    matrix[y][x] = 2;
    }
    for (let i = 0; i < predatorCount; i++) {
    let x = Math.floor(random(matrixSize));
    let y = Math.floor(random(matrixSize));
    matrix[y][x] = 3;
    }
    for (let i = 0; i < weedCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 4;
      }
      for (let i = 0; i < monsterCount; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 5;
        }
    
    }
    matrixGenerator(20, 40, 20, 20,20,10)

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
        let grassesObj =  new Grass(x, y);
        grasses.push(grassesObj)
        }
        else if (matrix[y][x] == 2){
        let grEat = new GrassEater(x,y)
          grassEaters.push(grEat)
          }
          else if(matrix[y][x] == 3){
            let pd = new Predator(x,y)
            predators.push(pd)
          }

          else if(matrix[y][x] == 4){
           let wd = new Weed(x,y)
           weeds.push(wd)
          }
          else if(matrix[y][x] == 5){
            let mnst = new Monster(x,y)
            monsters.push(mnst)
          }
        
        }
        }

 frameRate(1)
 createCanvas(matrix[0].length * side, matrix.length * side)
 background("gray")
}

function draw() {
 // console.log(grasses)
    for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
    if (matrix[y][x] == 1) {
    fill("green");
    rect(x * side, y * side, side, side);
    }
    else if (matrix[y][x] == 0) {
    fill("#acacac");
    rect(x * side, y * side, side, side);
    }
    else if(matrix[y][x] == 2){
      fill("yellow");
      rect(x * side, y * side, side, side);
    }
    else if(matrix[y][x] == 3){
      fill("red")
      rect(x * side, y * side, side, side);
    }
    else if(matrix[y][x] == 4){
      fill(29, 65, 42)
      rect(x * side, y * side, side, side);
    }
    else if(matrix[y][x] == 5){
      fill("purple")
      rect(x * side, y * side, side, side)
    }
  }
    }

  for(let i in grasses){
      grasses[i].mull();
  }

  for(let i in grassEaters){
    grassEaters[i].eat()
    
    
  }

  for(let i in predators){
    predators[i].eat()
  }

  for(let i in weeds){
   weeds[i].killing()
  }

  for(let i in monsters){
    monsters[i].move()
    monsters[i].eatersEat()
    }

  }



