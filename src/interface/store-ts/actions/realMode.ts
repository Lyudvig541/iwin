export const IS_REAL_MODE: 'IS_REAL_MODE' = 'IS_REAL_MODE';

export type IParams = {
    gameName : 'dice' | 'flip' | 'wheel' | 'mines' | 'kong' | 'keno',
    bool: boolean
}

export type IRealMode = { realMode: { realMode: boolean }}

export interface IIsRealMode {
    type: typeof IS_REAL_MODE
    payload: IParams
}

export type RealModeActionsType = IIsRealMode