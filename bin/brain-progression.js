#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const progressionLength = getRandomNumber(5, 10);
    const start = getRandomNumber(1, 20);
    const step = getRandomNumber(2, 5);
    const progression = generateProgression(start, step, progressionLength);
    
    const hiddenIndex = getRandomNumber(0, progressionLength - 1);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

playProgressionGame();
