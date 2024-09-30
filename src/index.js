import readlineSync from 'readline-sync';

const totalRounds = 3;

const startGame = (generateQuestion) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');

    for (let i = 0; i < totalRounds; i += 1) {
        const { question, correctAnswer } = generateQuestion();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!`);
};

export { startGame };

