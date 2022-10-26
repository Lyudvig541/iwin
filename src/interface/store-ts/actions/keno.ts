export const GENERATE_WIN_NUMBERS: 'GENERATE_WIN_NUMBERS' ='GENERATE_WIN_NUMBERS';
export const CLEAR_USER_GET_NUMBERS_LIST: 'CLEAR_USER_GET_NUMBERS_LIST' ='CLEAR_USER_GET_NUMBERS_LIST';
export const CLEAR_WIN_NUMBERS_LIST: 'CLEAR_WIN_NUMBERS_LIST' ='CLEAR_WIN_NUMBERS_LIST';
export const GET_USER_CHECK_NUMBERS: 'GET_USER_CHECK_NUMBERS' ='GET_USER_CHECK_NUMBERS';
export const GENERATE_RANDOM_CHECK: 'GENERATE_RANDOM_CHECK' ='GENERATE_RANDOM_CHECK';

export type IGetNumbers = number
export type IGameTypeKeno = 'Low' |'Medium' |'Hard'


export interface IClearUserList {
  type: typeof CLEAR_USER_GET_NUMBERS_LIST
}
export interface IRandomCheck {
  type: typeof GENERATE_RANDOM_CHECK
  payload: IGetNumbers
}
export interface IClearWinList {
  type: typeof CLEAR_WIN_NUMBERS_LIST
}

export interface IGenerateWinNumbers {
  type: typeof GENERATE_WIN_NUMBERS
  payload: IGameTypeKeno
}
export interface IGetUserCheckNumbers {
  type: typeof GET_USER_CHECK_NUMBERS
  payload: IGetNumbers
}

export type KenoActionsType = IGenerateWinNumbers | IGetUserCheckNumbers |IClearUserList | IClearWinList | IRandomCheck
