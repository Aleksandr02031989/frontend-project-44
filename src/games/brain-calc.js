import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const operators = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const expressionCalculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return `Error, the operator '${operator} not recognized.`;
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(1, 50);
  const number2 = generateRandomNumber(1, 50);

  const operatorIndex = generateRandomNumber(1, operators.length);
  const operator = operators[operatorIndex - 1];

  const question = `${number1} ${operator} ${number2}`;
  const answer = expressionCalculate(number1, number2, operator).toString();
  return [question, answer];
};

const launchGame = () => {
  startGame(description, generateRound);
};

export default launchGame;
