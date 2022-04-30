# Build a REST API with Node JS and Express

## Introduction
This is a code repository created for the Mars Rover challenge
First install the dependencies
NPM install or yarn install

Then you can run the application with yarn dev

There are 4 endpoints created

[POST]
/roverAllInput
Get the rover's starting location and movement
Example:
{
"X": "1",
"Y": "2",
"DIR": "N",
"MOV": "LMLMLMLMM"
}
========================================================== =
[GET]
/getRoverLocation
Method to show the Rover location
========================================================== =
[POST]
/setPositionRover
Method to place the rover in a location
Example:
{
"X": "1",
"Y": "2",
"DIR": "N",
}
========================================================== =
[POST]
/moveRover
Method to place move the rover from an already set location
Example:
{
"MOV": "LMLMLMLMM"
}