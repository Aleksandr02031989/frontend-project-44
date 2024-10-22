import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answer !== answerUser) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
