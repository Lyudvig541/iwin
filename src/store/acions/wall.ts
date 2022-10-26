import {
    CHANGE_WIN_OR_LOSE,
    CHANGE_BOMB_COUNT,
    START_NEW_GAME,
    WIN_OR_LOUSE,
    START_CHECK,
    CLICK_BOMB,
    CASH_OUT,
    IChangeWinOrLose,
    IChangeBombCount,
    IStartNewGame,
    IWinOrLouse,
    IStartClear,
    IStartCheck,
    IClickBomb,
    IWinParam,
    IClickId,
    IIsCheck,
    ICashOut,
    IParams,
    IIsWin
} from '../../interface/store-ts/actions/wall';

const changeBombCount = (number: IParams): IChangeBombCount => ({
    type: CHANGE_BOMB_COUNT, payload: number
});
const changeWinOrLose = (isWin: IIsWin): IChangeWinOrLose => ({
    type: CHANGE_WIN_OR_LOSE, payload: isWin
});
const startNewGame = (winCount: IStartClear): IStartNewGame => ({
    type: START_NEW_GAME, payload: { winCount }
});
const startCheck = (isCheck?: IIsCheck): IStartCheck => ({
    type: START_CHECK, payload: isCheck
});
const winOrLouse = (isWin: IWinParam): IWinOrLouse => ({
    type: WIN_OR_LOUSE, payload: isWin
});
const clickBomb = (id: IClickId): IClickBomb => ({
    type: CLICK_BOMB, payload: id
});
const cashOut = (): ICashOut => ({
    type: CASH_OUT
});

export {
    changeBombCount,
    changeWinOrLose,
    startNewGame,
    winOrLouse,
    startCheck,
    clickBomb,
    cashOut
};