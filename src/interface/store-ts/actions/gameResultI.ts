export const CHANGE_GAME_RESULT: 'CHANGE_GAME_RESULT' = 'CHANGE_GAME_RESULT';
export type IGame = 'dice' | 'flip' | 'wheel' | 'mines'| 'kong' | 'keno';
export type IParams = {
    game: IGame
    win:boolean
}

export interface IChangeGameResult {
    type: typeof CHANGE_GAME_RESULT
    payload: IParams
}
export type ResultActionsType = IChangeGameResult
