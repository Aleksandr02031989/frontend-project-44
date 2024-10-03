export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = 'Sam';
  console.log(`Hello, ${name}!`);
  console.log(description);

  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = '25'; 
    
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

