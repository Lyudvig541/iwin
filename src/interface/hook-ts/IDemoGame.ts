import { IGenerateStopRandom } from '../utils-ts/IGenerateRandomNumber';

type GameType = 'flip' | 'dice' | 'wheel'
type IWinner = number | null | IGenerateStopRandom


export type {
    GameType,
    IWinner
};