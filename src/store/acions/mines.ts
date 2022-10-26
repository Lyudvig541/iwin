import {
    CHANGE_BOMB_DIAMOND_COUNT,
    MINES_DEMO,
    IChangeBombCount,
    IChangeMines,
    IChangeMinesParam,
    IChangeParams
} from '../../interface/store-ts/actions/mines';

export const changeScoreboard = (changeCount : IChangeParams): IChangeBombCount => ({
    type: CHANGE_BOMB_DIAMOND_COUNT, payload: changeCount
});

export const minesDemo = (minesParam : IChangeMinesParam): IChangeMines => ({
    type: MINES_DEMO, payload: minesParam
});