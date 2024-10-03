#!/usr/bin/env node

import { startGame } from '../src/index.js'; 
import { generateCalcQuestion } from '../src/games/calc.js'; 

startGame(generateCalcQuestion);

