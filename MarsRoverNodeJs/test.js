var Rover = require('./Rover.js')
let rover;
  
  beforeEach(() => {
    rover = new Rover(5, 5);
    rover.setPosition(0, 0, "N")
  });
  
  describe("rover", () => {
    test("Has an initial position of 0 0 N", () => {
      expect(rover.printPosition()).toEqual("0 0 N");
    });
  
    it("Can move given instructions", () => {
      expect(rover.printPosition()).toEqual("0 0 N");
    });
  
    it("Can move postion correctly", () => {
      rover.processRover("M");
      expect(rover.printPosition()).toEqual("0 1 N");
      rover.processRover("RM");
      expect(rover.printPosition()).toEqual("1 1 E");
    });
  });