
type IWheel = {
  buttonData: {XWin: string, type: string}[],
  data: {XWin: string, type: string, countColor: number}[],
  scoreboardData: {[key:string]: number | string}[],
  onToggle:Function
}
type LineDataType = {[key:string]: string | number, size:number }[]
type IWheelWrapper ={
  buttonData: {XWin: string, type: string}[],
  result: boolean,
  lineData: LineDataType,
  setGameType:Function,
  rotate:boolean,
  value: any,
  setValue: Function,
  updateLineData:Function,
  gameType:{ XWin: string, type: string, win: string},
  balance:any
}
type IWheelWrapperMemoType = {
  winner: any,
  wheelRun: boolean
  setWheelRun:Function
  play:Function
}
type IWheelScoreboard = {
  scoreboardData:{[key:string]: number | string}[],
  data:{XWin: string, type: string, countColor: number}[],
  onToggle: Function
}
type IScoreboardItems = {
  item: {[key:string]: number | string}
  idx: number
}
type IWheelButton = { type:string, item: {[key:string]: number | string}, onClick: Function, children:any }
type IWheelGameTable = {
  data: { [key: string]:number | string}[],
}

export type {
    IWheelWrapper,
    IWheel,
    LineDataType,
    IWheelWrapperMemoType,
    IWheelScoreboard,
    IScoreboardItems,
    IWheelButton,
    IWheelGameTable
};