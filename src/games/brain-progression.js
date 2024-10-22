import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (number, interval) => {
  const numbers = [];
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    const newNumber = number + i * interval;
    numbers.push(newNumber);
  }
  return numbers;
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(1, 50);
  const randomInterval = generateRandomNumber(2, 10);
  const randomIndex = generateRandomNumber(0, 9);

  const progression = generateProgression(randomNumber, randomInterval);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';

  const question = progression.join(' ');
  return [question, answer];
};

const launchGame = () => {
  startGame(description, generateRound);
};

export default launchGame;
