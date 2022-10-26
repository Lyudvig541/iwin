export const CHANGE_LIGHT_MODE: 'CHANGE_LIGHT_MODE' = 'CHANGE_LIGHT_MODE';

export type IParams = 'light' | 'dark'
export type IState = { lightMode: { lightMode: boolean }}
export interface IChangeLightMode {
  type: typeof CHANGE_LIGHT_MODE
  payload: IParams
}

export type LightModeActionsType = IChangeLightMode
