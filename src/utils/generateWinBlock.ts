import { generateRandomNumber } from './generateRandomNumber';

export const generateWinnBlock = (winCount: number, generateMaxNumber = 4): number[] => {

    let generate = true;
    const randomNumbers = [];

    while (generate) {

        const number = generateRandomNumber(generateMaxNumber);

        if (randomNumbers.indexOf(number) === -1) {

            randomNumbers.push(number);

        }

        generate = randomNumbers.length !== winCount;

    }

    return randomNumbers;

};
