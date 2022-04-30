import express from 'express';

import { getRoverLocation, roverAllInput, setPositionRover, moveRover } from '../controllers/rover.js';

const router = express.Router();

router.get('/getRoverLocation', getRoverLocation);

router.post('/roverAllInput', roverAllInput);

router.post('/setPositionRover', setPositionRover);

router.post('/moveRover', moveRover);

export default router;