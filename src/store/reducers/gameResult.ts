import produce from 'immer';
import { ResultActionsType, CHANGE_GAME_RESULT } from '../../interface/store-ts/actions/gameResultI';
import { IInitialState } from '../../interface/store-ts/redducers/gameResultI';

const initialState: IInitialState = {
    dice:{
        wins:0,
        loses:0
    },
    flip:{
        wins:0,
        loses:0
    },
    wheel:{
        wins:0,
        loses:0
    },
    mines:{
        wins:0,
        loses:0
    }
};

const gameResult = produce((draft, action:ResultActionsType) => {

    switch (action.type) {

        case CHANGE_GAME_RESULT: {

            const { game, win } = action.payload;
            const key = (win && 'wins') || 'loses';

            draft[game][key] += 1;

            break;

        }

        default: {

            break;

        }

    }

}, initialState);

export default gameResult;