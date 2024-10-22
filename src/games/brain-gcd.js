import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => (number2 === 0 ? number1 : getGcd(number2, number1 % number2));

const generateRound = () => {
  const number1 = generateRandomNumber(1, 50);
  const number2 = generateRandomNumber(1, 50);

  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();
  return [question, answer];
};

const launchGame = () => {
  startGame(description, generateRound);
};

export default launchGame;
