import constantsRovers from '../constants/rover.constants.js';
class Rover {
    constructor(upperX, upperY) {
        this.upperX = upperX;
        this.upperY = upperY;
        this.x = 0;
        this.y = 0;
        this.facing = constantsRovers.MAP.N;
    }
    
    setPosition(x, y, dir) {
        let re = new RegExp("^[0-" + this.upperX + "][0-" + this.upperY + "][NEWS]$");
        console.log(x)
        console.log(y)
        console.log(dir)
        if (re.test(x + y + dir)) {
            this.x = x;
            this.y = y;
            this.facing = dir;

            return true
        }

        return false
    }

    //Print the rover's position along with direction
    printPosition() {
        return (this.x + " " + this.y + " " + this.facing)
    }

    turnRoverLeft = () => {
        var oldFace = this.facing
        this.facing = constantsRovers.LEFT_TURNS_MAP[oldFace]
    };

    turnRoverRight = () => {
        var oldFace = this.facing
        this.facing = constantsRovers.RIGHT_TURNS_MAP[oldFace]
    };

    validateOutMap(){
        if((this.y < 0 || this.y > this.upperY) || (this.x < 0 || this.y > this.upperX)) return true 
        return false
    }



    move() {

        if (this.facing === constantsRovers.MAP.N) {
            this.y++;
        } else if (this.facing === constantsRovers.MAP.E) {
            this.x++;
        } else if (this.facing === constantsRovers.MAP.S) {
            this.y--;
        } else if (this.facing === constantsRovers.MAP.W) {
            this.x--;
        }

        return this.validateOutMap()
    }
    processRover(commands) {
        for (var idx = 0; idx < commands.length; idx++) {
            let moveReturn = this.roverMovement(commands.charAt(idx));

            if(moveReturn !== true){
                console.log(moveReturn)
                break
            }
        }
    }
    roverMovement(command) {
        if (command === constantsRovers.DIRECTIONS.L) {
            this.turnRoverLeft();
        } else if (command === constantsRovers.DIRECTIONS.R) {
            this.turnRoverRight();
        } else if (command === constantsRovers.DIRECTIONS.M) {
            let isOutMove = this.move();
            if(isOutMove){
                return constantsRovers.ERROR.OUT_MAP
            }
        } else {
            return constantsRovers.ERROR.NO_LANGUAGE
        }

        return true
    }
}
export default Rover;