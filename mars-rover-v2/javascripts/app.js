var directions = {
  north: "N",
  south: "S",
  east: "E",
  west: "W",
}

var myRovers = {
  /*roverA: {*/
  direction: directions.north,
  x: 0,
  y: 0,
  travelLog: new Array({x:0,y:0})
  }//,

  /*roverB: {
    direction: directions.north,
    x: 9,
    y: 9,
    travelLog: new Array({x:0,y:0})
    }
}*/

// Must be sorted in ascendent order
let obstacles = [[0,4],[2,3],[3,8],[5,2],[8,0],[9,4]];

let gridArray = [];

let k = 0;

for (let i = 0; i<10; i++){

  gridArray[i] = [];

  for (let j = 0; j<10; j++){
    
    if (obstacles[k] && (i === obstacles[k][0]) && (j === obstacles[k][1])) {
      gridArray [i][j] = 1;
      k++;
    }
    else {
      gridArray [i][j] = 0;
    }

  }

}



function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case directions.north:
      rover.direction = directions.west
      break;
    case directions.south:
      rover.direction = directions.east
      break;
    case directions.east :
      rover.direction = directions.north
      break;
    case directions.west :
      rover.direction = directions.south
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");

  switch (rover.direction){
    case directions.north:
      rover.direction = directions.east
      break;
    case directions.south:
      rover.direction = directions.west
      break;
    case directions.east :
      rover.direction = directions.south
      break;
    case directions.west :
      rover.direction = directions.north
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called!")

  let y = rover.y;
  let x = rover.x;

  switch (rover.direction) {
    case directions.north:
      y--
      break;
    case directions.south:
      y++
      break;
    case directions.east :
      x++
      break;
    case directions.west :
      x--
      break;
  }

  if ((y>9 || y<0) || (x>9 || x<0)){
    console.log("Error, that move can´t be done.");
  }
  else if (gridArray[x][y] === 1){
    console.log("Oops, you found and obstacle.");

  }
  else {

    rover.y = y;
    rover.x = x;
    rover.travelLog.push({x: rover.x , y: rover.y})
    console.log("Rover position: (" + rover.x + "," +  rover.y + ")");
  }
}

function moveBackward(rover){
  console.log("moveBackward was called!")

  let y = rover.y;
  let x = rover.x;

  switch (rover.direction) {
    case directions.north:
      y++
      break;
    case directions.south:
      y--
      break;
    case directions.east :
      x--
      break;
    case directions.west :
      x++
      break;
  }

  if ((y>9 || y<0) || (x>9 || x<0)){
    console.log("Error, that move can´t be done.");
  }
  else if (gridArray[x][y] === 1){
    console.log("Oops, you found and obstacle.");

  }
  else {

    rover.y = y;
    rover.x = x;
    rover.travelLog.push({x: rover.x , y: rover.y})
    console.log("Rover position: (" + rover.x + "," +  rover.y + ")");
  }
}

function commands(array){
  
  for(let i=0; i<array.length; i++){
    if (array[i] === "f"){
      moveForward(myRovers);
    }
    else if (array[i] === "r"){
      turnRight(myRovers);
    }
    else if (array[i] === "l"){
      turnLeft(myRovers);
    }
    else if (array[i] === "b"){
      moveBackward(myRovers);
    }
    
  }

  
  console.log("The Rover Travel Log: ");
  myRovers.travelLog.forEach(arrayElement => {
    console.log("(" + arrayElement.x + "," + arrayElement.y + ")");
  });
}

