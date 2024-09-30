#!/usr/bin/env node

import { startGame } from '../src/index.js'; // Импортируем общую логику
import { generateCalcQuestion } from '../src/games/calc.js'; // Импортируем логику для игры калькулятор

startGame(generateCalcQuestion);

