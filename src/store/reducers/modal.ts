import produce from 'immer';
import { ModalActionsType, OPEN_OR_CLOSE_MODAL } from '../../interface/store-ts/actions/modal';
import { IInitialState } from '../../interface/store-ts/redducers/modal';

const initialState:IInitialState = {};

const modal = produce((draft, action:ModalActionsType) => {

    switch (action.type) {

        case OPEN_OR_CLOSE_MODAL: {

            const { key, state } = action.payload;

            draft[key] = state;
            break;

        }

        default: {

            break;

        }

    }

}, initialState);

export default modal;