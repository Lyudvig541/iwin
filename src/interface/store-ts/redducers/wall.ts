import { IWallGameData } from '../../components-ts/wall-ts/IWall';

type Icoefficient = {
  id: number
  coefficient: number
}[]

type IGetInStore = { wall: { coefficient: Icoefficient } }

export type IWallWinOrLose = {
  winOrLoseCount: {
    win: number, lose: number
  }
}

type IBombsCountButton= {
  id: number,
  precent: number[]
  x: number
  text: string
}[]

type IState = {
  coefficient: Icoefficient
  bombsCountButton: IBombsCountButton,
  game: IWallGameData
  isWin: boolean,
  startCount: number,
  isNextClick: boolean | null,
  newGame: boolean,
  started: boolean,
  winOrLoseCount: {
    win: number, lose: number
  }
}

export type{
    IState,
    IGetInStore,
    Icoefficient,
    IBombsCountButton
};