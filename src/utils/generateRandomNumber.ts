import { IArrData, IData, IGenerateStopRandom, INumber } from '../interface/utils-ts/IGenerateRandomNumber';


const generateRandomNumber= (n: INumber): INumber => Math.round(Math.random() * n);
const getRandomNumber = (arr: IArrData): INumber => Math.floor(Math.random() * arr.length);
const generateStopRandom = (data: IData): IGenerateStopRandom => {

    const colorsArr: string[] = Object.keys(data);
    const color = getRandomNumber(colorsArr);
    const number = getRandomNumber(data[colorsArr[color]]);

    return {
        color: colorsArr[color],
        number: data[colorsArr[color]][number]
    };

};
const randomNumberGenerator = (): INumber => Math.floor((Math.random()+1) * 20) + 20;

export {
    generateRandomNumber,
    getRandomNumber,
    generateStopRandom,
    randomNumberGenerator
};