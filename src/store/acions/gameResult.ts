import { CHANGE_GAME_RESULT, IChangeGameResult, IGame } from '../../interface/store-ts/actions/gameResultI';

const changeGameResult = (game: IGame, win: boolean) 
    : IChangeGameResult => (
    { type: CHANGE_GAME_RESULT, payload: { game, win } }
);

export {
    changeGameResult
};