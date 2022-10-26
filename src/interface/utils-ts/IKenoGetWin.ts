type IListType = number[]
type IType = 'Low' | 'Medium' | 'Hard'
type IWinType = { isWin: boolean, winX: number }
type ICofList = {percent: number, x: number | string }[]
type ICofKenoShow = {id: number, percent: number, x: number | string }[]
type IMinimumMatch = {
  [ key: string ] : {
      id: number,
    minX: number,
    xList: ICofList,
  }[]
}
type IKenoShowCoefficient = {
    [ key: string ] : {
        id: number,
        minX: number,
        xList: ICofKenoShow,
    }[]
}

export type {
    IWinType,
    IListType,
    IType,
    ICofList,
    IMinimumMatch,
    IKenoShowCoefficient
};