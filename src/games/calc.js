import getRandomInt from '../utils.js'; 

const operations = ['+', '-', '*'];

const generateCalcQuestion = () => {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const operation = operations[getRandomInt(0, operations.length - 1)];

    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = eval(question); 

    return { question, correctAnswer: String(correctAnswer) };
};

export { generateCalcQuestion };

