import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log("Let's try again!");
      return;
    }
  }

  console.log('Congratulations, you won!');
};

export default runEvenGame;

