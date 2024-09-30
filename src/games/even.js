import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js'; // Предположим, что есть утилита для генерации случайных чисел

const roundsCount = 3;

const isEven = (num) => num % 2 === 0;

const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 0; round < roundsCount; round += 1) {
    const number = getRandomNumber(1, 100); // Генерация случайного числа от 1 до 100
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startEvenGame;

