import { IBombsCountButton, Icoefficient } from '../../store-ts/redducers/wall';

type IGame = {
  count: number,
  setCount: Function;
  setDisable: Function;
  setNextLine: Function;
  setButtonText: Function;
  nextClickLine: boolean;
  setOpenWinModal: Function;
  clickLine: number[]
  setClickLine: Function
}
type IWState = {
  wall: {
    bombsCountButton: IBombsCountButton,
    isWin: boolean,
    startCount: 1 | 2 | 3 | 4
    started: boolean
  }
}
type IWallPage = {
  scoreboardData: { [key: string]: number | string }[],
  balance: number
}
type ICoefficientPage = {
  count: number,
  nextClickLine: boolean,
    startCount: number
}
type IStateWall = {
  wall: {
    startCount: number,
    isNextClick: boolean,
    newGame: boolean,
    started: boolean,
    coefficient: Icoefficient,
  }
}
type IMainPartGame = {
  id: number,
  item: {
    win: boolean,
    id: number,
    isClick: boolean
  },
  count: number,
  setLine: Function,
  isCheck: boolean,
  setCount: Function,
  loseLine: { line: null | number, id: null | number},
  clickLine: number[],
  setDisable: Function,
  setClickLine: Function,
  setNextLine: Function,
  setButtonText: Function,
  nextClickLine: boolean,
  setOpenWinModal: Function
}
type IWallGameData = {
  [key: number] : {
    id: number
    isClick: boolean
    win: boolean
  }[]
}
type IWallScoreboard = {
  noOpen?: boolean
}
type IButtonGroupWall ={
  disable: boolean;
  buttonText: string;
  setCount: Function ;
  setDisable: Function;
  setButtonText: Function;
  setOpenWinModal: Function ;
}
type IBetConfigBlock = {
  disable: boolean;
  setCount: Function;
  buttonText: string,
  setDisable: Function;
  setButtonText: Function;
  setOpenWinModal: Function;
}
type IWallGameStatistics = {
    data: {
        wins: number
        loses: number
        viewAll: Function
    },
    tableRef?: any,
    setActive?: Function,
    game: string,
}

export type {
    IGame,
    IWState,
    IWallPage,
    IStateWall,
    IMainPartGame,
    IWallGameData,
    IBetConfigBlock,
    IWallScoreboard,
    IButtonGroupWall,
    ICoefficientPage,
    IWallGameStatistics
};
