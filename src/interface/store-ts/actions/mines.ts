export const CHANGE_BOMB_DIAMOND_COUNT: 'CHANGE_BOMB_DIAMOND_COUNT' = 'CHANGE_BOMB_DIAMOND_COUNT';
export const MINES_DEMO: 'MINES_DEMO' = 'MINES_DEMO';

export type IChangeParams = { mines: number, diamond : number };
export type IChangeMinesParam = { numberOfMines : number };

export interface IChangeBombCount {
    type: typeof CHANGE_BOMB_DIAMOND_COUNT
    payload: IChangeParams
}

export interface IChangeMines {
    type: typeof MINES_DEMO
    payload: IChangeMinesParam
}


export type MinesActionsType = IChangeBombCount | IChangeMines;