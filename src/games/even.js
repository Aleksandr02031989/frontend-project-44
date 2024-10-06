const runEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  
  const generateRound = () => {
    const number = getRandomInt(1, 100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    return [number, correctAnswer];
  };

  runGame(description, generateRound);
};

export default runEvenGame;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = 'Sam';  // Здесь нужно заменить на ввод имени пользователя
  console.log(`Hello, ${name}!`);
  console.log(description);

  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = '25';  // Это временная заглушка, нужно заменить на реальный ввод

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
