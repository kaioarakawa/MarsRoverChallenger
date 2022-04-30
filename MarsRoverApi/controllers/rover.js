import Rover from "../services/Rover.js";

const rov = new Rover(5,5)

export const getRoverLocation = (req, res) => {
    res.send(rov.printPosition());
}

export const roverAllInput = (req, res) => {   
    const { X, Y, DIR, MOV } = req.body;

    let validatePosition = rov.setPosition(X, Y, DIR);

    if(!validatePosition){
        res.status(500).json({ error: 'Bad position for rover' });
    }
    
    rov.processRover(MOV);

    res.send(rov.printPosition());
};

export const setPositionRover = (req, res) => {
    const { X, Y, DIR } = req.body;
    let validatePosition = rov.setPosition(X, Y, DIR);

    if(!validatePosition){
        res.status(500).json({ error: 'Bad position for rover' });
    }

    res.send(rov.printPosition());
};

export const moveRover = (req, res) => { 
    const { MOV } = req.body;

    rov.processRover(MOV);

    res.send(rov.printPosition());
};
