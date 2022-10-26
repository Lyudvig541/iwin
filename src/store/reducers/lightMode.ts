import produce from 'immer';
import { CHANGE_LIGHT_MODE, LightModeActionsType } from '../../interface/store-ts/actions/lightMode';
import { IState } from '../../interface/store-ts/redducers/lightMode';
import storage from '../../utils/storage';

const initialState: IState = {
    lightMode: true
};

const lightMode = produce((draft, action:LightModeActionsType) => {

    switch (action.type) {

        case CHANGE_LIGHT_MODE: {

            storage.set('lightMode', action.payload === 'light');
            draft.lightMode = action.payload === 'light';
            break;

        }

        default: {

            break;

        }

    }

}, initialState);

export default lightMode;