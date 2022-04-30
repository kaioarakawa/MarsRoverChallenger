var rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
var rov = require('./Rover.js')
var rover;
var inputNo = 1;
var output;
var listRovers = [];
var sequential = 0;
var qtnRovers = 0;
console.log("Enter the maximum coordinates of the map EX: 5 5")
rl.on('line', function (data) {
  // dataSplit[0] // 1
  // dataSplit[1] // 2
  // dataSplit[2] // N
  // dataSplit[3] // commands

  if (inputNo === 1) {
    
    var dataSplit = data.split(" ");
    rover = new rov(dataSplit[0], dataSplit[1]);
    inputNo++;
    console.log("-----------------------------------------------------------------------------------------")
    console.log("Enter the control code for the rovers (can be entered for several robots on a single line)")
    console.log("Exemple: 1 2 N LMLMLMLMM 3 3 E MRRMMRMRRM")
    console.log("Exemple: |↑first robot↑| |↑second robot↑|")
    console.log("-----------------------------------------------------------------------------------------")
  } else if (inputNo === 2) {
    var dataSplit = data.split(" ");

    dataSplit.forEach(element => {
      
      if(listRovers[qtnRovers] === undefined)
        listRovers[qtnRovers] = {}

      if (sequential === 0) {
        listRovers[qtnRovers].x = element
        sequential++
      }else if (sequential === 1) {
        listRovers[qtnRovers].y = element
        sequential++
      }else if (sequential === 2) {
        listRovers[qtnRovers].orientation = element
        sequential++
      } else {
        listRovers[qtnRovers].coordinates = element
        sequential = 0
        qtnRovers++
      }

    });

    listRovers.forEach(element => {
      if(!rover.setPosition(element.x, element.y, element.orientation))
        console.log("Invalid robot start position. For robot")
      else{
        rover.processRover(element.coordinates);
        output = rover.printPosition();
        console.log("\n\r")
        console.log("------------------------------------------")
        console.log("Final co-ordinates and heading for robots")
        console.log(output);
      }
    });
  
    process.exit();
  }
  
})