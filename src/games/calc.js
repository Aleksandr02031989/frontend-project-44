import getRandomInt from '../utils.js';
// Функция для вычисления результата
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  
  const name = prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  
  console.log('What is the result of the expression?');

  const operators = ['+', '-', '*'];
  const maxRounds = 3;

  for (let round = 1; round <= maxRounds; round += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const operator = operators[getRandomInt(0, operators.length - 1)];

    const correctAnswer = calculate(num1, num2, operator);

    console.log(`Question: ${num1} ${operator} ${num2}`);
    
    const userAnswer = prompt('Your answer: ');
    
    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
