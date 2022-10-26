import { ReactComponentElement } from 'react';
import { IDataScorbord, IDiceGameStatistics, IDiceTable } from '../dice-ts/IDice';
import { IFlipGame, IFlipGameStatistics, IFlipGameTable, IFlipScoreboard } from '../flip-ts/IFlipPage';
import { IWheelWrapper } from '../wheel-ts/IWheel';

type IGamesContainer = {
  game: ReactComponentElement<IFlipGame | IWheelWrapper | any>,
  lastGame: ReactComponentElement<IDiceGameStatistics | IFlipGameStatistics | any>,
  scoreboard: ReactComponentElement<IDataScorbord | IFlipScoreboard | any> | false,
  table: ReactComponentElement<IDiceTable | IFlipGameTable | any>,
  gameRealMode: 'wheel' | 'flip' | 'dice' | 'kong' | 'keno' | 'mines'
}
type IGameStatistics = {
  data: {
    wins: number,
    loses: number
    viewAll: Function
  },
  tableRef?: any,
  setActive?: Function,
  game: string,
}

type ReduxState = {
  gameResult: {
    [key: string] :{
      wins: number | string,
      loses: number | string}
  }
}

export type {
    IGamesContainer,
    IGameStatistics,
    ReduxState
};