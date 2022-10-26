import produce from 'immer';
import store from '../../utils/storage';
import { IInitialState } from '../../interface/store-ts/redducers/realMode';
import { IS_REAL_MODE, RealModeActionsType } from '../../interface/store-ts/actions/realMode';

const initialState:IInitialState = {
    realMode: null
};

const realMode = produce((draft, action:RealModeActionsType) => {

    switch (action.type) {

        case IS_REAL_MODE: {

            const { gameName, bool } = action.payload;

            const gamModmargine = (store.get(gameName) !== null && store.get(gameName));

            store.set(gameName, `${bool || !gamModmargine}`);

            draft.realMode = store.get(gameName);
            break;
        
        }

        default: {

            break;
        
        }
    
    }

}, initialState);

export default realMode;
