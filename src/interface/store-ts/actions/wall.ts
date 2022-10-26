
export const CASH_OUT: 'CASH_OUT' = 'CASH_OUT';
export const CLICK_BOMB: 'CLICK_BOMB' = 'CLICK_BOMB';
export const START_CHECK: 'START_CHECK' = 'START_CHECK';
export const WIN_OR_LOUSE: 'WIN_OR_LOUSE' = 'WIN_OR_LOUSE';
export const START_NEW_GAME: 'START_NEW_GAME' = 'START_NEW_GAME';
export const CHANGE_WIN_OR_LOSE: 'CHANGE_WIN_OR_LOSE' = 'CHANGE_WIN_OR_LOSE';
export const CHANGE_BOMB_COUNT: 'CHANGE_BOMB_COUNT' = 'CHANGE_BOMB_COUNT';

export type IParams = number
export type IClickId = number
export type IWinParam = boolean
export type IStartClear = number
export type IIsCheck = boolean
export type IIsWin = boolean

export interface IChangeBombCount {
  type: typeof CHANGE_BOMB_COUNT
  payload: IParams
}
export interface IChangeWinOrLose {
  type: typeof CHANGE_WIN_OR_LOSE
  payload: IIsWin
}
export interface IStartNewGame {
  type: typeof START_NEW_GAME
  payload: { winCount: IStartClear }
}
export interface IWinOrLouse {
  type: typeof WIN_OR_LOUSE
  payload: IWinParam
}
export interface IStartCheck {
  type: typeof START_CHECK
  payload?: IIsCheck
}
export interface IClickBomb {
  type: typeof CLICK_BOMB
  payload: IClickId
}
export interface ICashOut {
  type: typeof CASH_OUT
}


export type WallActionsType =
  IChangeBombCount | IWinOrLouse | ICashOut | IStartNewGame | IClickBomb | IStartCheck | IChangeWinOrLose