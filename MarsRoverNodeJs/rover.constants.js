module.exports = Object.freeze({
    LEFT_TURNS_MAP : {
        N: "W",
        W: "S",
        S: "E",
        E: "N"
    },
    RIGHT_TURNS_MAP : {
        N: "E",
        E: "S",
        S: "W",
        W: "N"
    },
    MAP : {
        N: "N",
        E: "E",
        S: "S",
        W: "W"
    },
    DIRECTIONS : {
        L: 'L',
        R: 'R',
        M: 'M',
    },
    ERROR : {
        OUT_MAP: 'Rover has gone out of bounds on the map',
        NO_LANGUAGE: 'Only Rover commands please!!',
    }
});