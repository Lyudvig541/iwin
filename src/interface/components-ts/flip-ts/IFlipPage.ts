
type IFlipPage = {
  active: 'heads' | 'tails',
  changeCoin: Function,
  scoreboardData: {[key:string]: number | string}[]
}

type IFlipGame ={
  active: 'heads' | 'tails',
  changeCoin: Function,
  balance:number
}

type IFlipScoreboard = {
  scoreboardData: {[key:string]: number | string}[]
}

type IFlipGameStatistics = {
  data: {
   wins: number
   loses: number
   viewAll: Function
 },
  tableRef?: any,
  setActive?: Function,
  game: string,
}

type IFlipGameTable = {
  headerTabs: string[],
  tableRef: any,
  active: number,
  setActive: Function
}

type IChoosePart = { 
  active:'heads' | 'tails', 
  changeCoin: Function, 
  isRolling: boolean, 
  result: boolean, 
  isClick: boolean, 
  winClassName: string,
}

type IBetContent = { 
  active:'heads' | 'tails', 
  changeCoin: Function, 
  isRolling: boolean, 
  result: boolean, 
  isClick: boolean, 
  winClassName: 'heads' | 'tails' | '',
  setValue: Function,
  value: number | undefined,
  disable: boolean
  addHistory: any,
}

export type {
    IFlipPage,
    IFlipGame,
    IFlipScoreboard,
    IFlipGameTable,
    IFlipGameStatistics,
    IChoosePart,
    IBetContent
};