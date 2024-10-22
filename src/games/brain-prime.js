import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(1, 100);

  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;
  return [question, answer];
};

const launchGame = () => {
  startGame(description, generateRound);
};

export default launchGame;
